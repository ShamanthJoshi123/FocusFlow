import datetime

# Declare helper functions that take db as parameter
# ---- Tracker Status ----
def get_tracker_status(db):
    config = db.config.find_one({"type": "tracker"})
    return config.get("status", False) if config else False

def update_tracker_status(db, status):
    result = db.config.update_one(
        {"type": "tracker"},
        {"$set": {"status": bool(status)}},
        upsert=True
    )
    return result.modified_count > 0 or result.upserted_id is not None

def get_tracked_apps(db):
    config = db.tracker_config.find_one({}, {"_id": 0, "tracked_apps": 1})
    return config.get("tracked_apps", []) if config else []

def add_tracked_app(db, app_name):
    result = db.tracker_config.update_one(
        {},
        {"$addToSet": {"tracked_apps": app_name}},
        upsert=True
    )
    return result.modified_count > 0 or result.upserted_id is not None

def remove_tracked_app(db, app_name):
    result = db.tracker_config.update_one(
        {},
        {"$pull": {"tracked_apps": app_name}}
    )
    return result.modified_count > 0

# ---------------- APP TIMERS ----------------

def set_app_timer(db, app_name, time_limit_minutes):
    result = db.app_timers.update_one(
        {"app_name": app_name},
        {"$set": {"time_limit": time_limit_minutes}},
        upsert=True
    )
    return result.modified_count > 0 or result.upserted_id is not None

def get_app_timers(db):
    timers = list(db.app_timers.find({}, {"_id": 0}))
    return timers

def delete_app_timer(db, app_name):
    result = db.app_timers.delete_one({"app_name": app_name})
    return result.deleted_count > 0

# ---------------- VIOLATION LOG ----------------

def log_violation(db, app_name, violation_type, message):
    violation = {
        "app_name": app_name,
        "type": violation_type,
        "message": message,
        "timestamp": datetime.datetime.utcnow()
    }
    db.violation_log.insert_one(violation)
    return True

def get_all_violations(db):
    violations = list(db.violation_log.find({}, {"_id": 0}))
    return violations

# ---------------- PRODUCTIVITY POINTS ----------------

def get_productivity_points(db):
    data = db.productivity.find_one({}, {"_id": 0})
    if not data:
        db.productivity.insert_one({"points": 0})
        return 0
    return data["points"]

def set_productivity_points(db, points):
    db.productivity.update_one({}, {"$set": {"points": points}}, upsert=True)
    return True

def increment_productivity_points(db, amount):
    db.productivity.update_one({}, {"$inc": {"points": amount}}, upsert=True)
    return True

def decrement_productivity_points(db, amount, reason):
    db.productivity.update_one({}, {"$inc": {"points": -abs(amount)}}, upsert=True)
    db.violation_log.insert_one({
        "type": "point_decrement",
        "message": reason,
        "points_removed": amount,
        "timestamp": datetime.datetime.utcnow()
    })
    return True


# ---------------- RESET ALL ----------------

def reset_all_settings(db):
    db.tracker_config.delete_many({})
    db.blacklist.delete_many({})
    db.productivity.update_one({}, {"$set": {"points": 0}}, upsert=True)
    db.config.update_one({"type": "tracker"}, {"$set": {"status": False}}, upsert=True)
    db.violation_log.delete_many({})
    db.app_timers.delete_many({})
    return True


