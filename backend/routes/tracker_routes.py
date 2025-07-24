from flask import Blueprint, request, jsonify, current_app
from models.tracker import (
    get_tracker_status,
    update_tracker_status,
    get_tracked_apps,
    add_tracked_app,
    remove_tracked_app,
    set_app_timer,
    get_app_timers,
    delete_app_timer,
    log_violation,
    get_all_violations,
    get_productivity_points,
    set_productivity_points,
    increment_productivity_points,
    decrement_productivity_points,
    reset_all_settings
)

tracker_bp = Blueprint('tracker', __name__)

# ---- Tracker Status ----
@tracker_bp.route('/status', methods=['GET', 'POST'])
def tracker_status():
    db = current_app.mongo.db

    if request.method == 'GET':
        status = get_tracker_status(db)
        return jsonify({'tracker_status': status}), 200

    elif request.method == 'POST':
        data = request.get_json()
        status = data.get('status')

        if status is None:
            return jsonify({'error': 'Missing status value'}), 400

        updated = update_tracker_status(db, status)
        return jsonify({'message': 'Tracker status updated', 'success': updated}), 200

# ---- Tracked Apps ----
@tracker_bp.route("/tracked-apps", methods=["GET"])
def get_tracked_apps_route():
    apps = get_tracked_apps(current_app.mongo.db)
    return jsonify({"tracked_apps": apps}), 200

@tracker_bp.route("/tracked-apps", methods=["POST"])
def add_tracked_app_route():
    data = request.get_json()
    app_name = data.get("name")
    if not app_name:
        return jsonify({"success": False, "message": "App name is required"}), 400

    success = add_tracked_app(current_app.mongo.db, app_name)
    return jsonify({"success": success, "message": "App added" if success else "App already exists"})

@tracker_bp.route("/tracked-apps/<app_name>", methods=["DELETE"])
def remove_tracked_app_route(app_name):
    success = remove_tracked_app(current_app.mongo.db, app_name)
    return jsonify({"success": success, "message": "App removed" if success else "App not found"})

# ---- Blacklist ----
@tracker_bp.route("/blacklist", methods=["GET"])
def get_blacklist():
    db = current_app.mongo.db
    blacklisted = list(db.blacklist.find({}, {"_id": 0}))
    return jsonify(blacklisted), 200

@tracker_bp.route("/blacklist", methods=["POST"])
def add_to_blacklist():
    db = current_app.mongo.db
    data = request.get_json()
    app_name = data.get("app_name")

    if not app_name:
        return jsonify({"message": "App name is required"}), 400

    if db.blacklist.find_one({"app_name": app_name}):
        return jsonify({"message": "App already in blacklist"}), 409

    db.blacklist.insert_one({"app_name": app_name})
    return jsonify({"message": f"{app_name} added to blacklist"}), 201

@tracker_bp.route("/blacklist/<app_name>", methods=["DELETE"])
def remove_from_blacklist(app_name):
    db = current_app.mongo.db
    result = db.blacklist.delete_one({"app_name": app_name})

    if result.deleted_count == 0:
        return jsonify({"message": "App not found in blacklist"}), 404

    return jsonify({"message": f"{app_name} removed from blacklist"}), 200

# ---------------- APP TIMERS ----------------

@tracker_bp.route("/timers", methods=["GET"])
def get_all_app_timers():
    db = current_app.mongo.db
    timers = get_app_timers(db)
    return jsonify({"timers": timers}), 200

@tracker_bp.route("/timers", methods=["POST"])
def set_app_timer_route():
    db = current_app.mongo.db
    data = request.get_json()
    app_name = data.get("app_name")
    time_limit = data.get("time_limit")

    if not app_name or time_limit is None:
        return jsonify({"success": False, "message": "App name and time limit are required"}), 400

    success = set_app_timer(db, app_name, time_limit)
    return jsonify({"success": success, "message": f"Timer set for {app_name}"}), 200

@tracker_bp.route("/timers/<app_name>", methods=["DELETE"])
def delete_app_timer_route(app_name):
    db = current_app.mongo.db
    success = delete_app_timer(db, app_name)

    if not success:
        return jsonify({"success": False, "message": "Timer not found for app"}), 404

    return jsonify({"success": True, "message": f"Timer deleted for {app_name}"}), 200

# ---------------- VIOLATION LOG ----------------

@tracker_bp.route("/violation-log", methods=["POST"])
def post_violation():
    db = current_app.mongo.db
    data = request.get_json()
    app_name = data.get("app_name")
    violation_type = data.get("type")
    message = data.get("message")

    if not app_name or not violation_type or not message:
        return jsonify({"success": False, "message": "Missing required fields"}), 400

    log_violation(db, app_name, violation_type, message)
    return jsonify({"success": True, "message": "Violation logged"}), 201

@tracker_bp.route("/violation-log", methods=["GET"])
def get_violations():
    db = current_app.mongo.db
    violations = get_all_violations(db)
    return jsonify({"violations": violations}), 200

# ---------------- PRODUCTIVITY POINTS ----------------

@tracker_bp.route("/productivity-points", methods=["GET"])
def get_points():
    db = current_app.mongo.db
    points = get_productivity_points(db)
    return jsonify({"success": True, "points": points}), 200

@tracker_bp.route("/productivity-points", methods=["POST"])
def update_points():
    db = current_app.mongo.db
    data = request.get_json()
    points = data.get("points")

    if points is None:
        return jsonify({"success": False, "message": "Missing 'points'"}), 400

    set_productivity_points(db, points)
    return jsonify({"success": True, "message": "Points updated"}), 200

@tracker_bp.route("/productivity-points/increment", methods=["POST"])
def increment_points():
    db = current_app.mongo.db
    data = request.get_json()
    amount = data.get("amount")

    if amount is None:
        return jsonify({"success": False, "message": "Missing 'amount'"}), 400

    increment_productivity_points(db, amount)
    return jsonify({"success": True, "message": f"Points incremented by {amount}"}), 200

@tracker_bp.route("/productivity-points/decrement", methods=["POST"])
def decrement_points():
    db = current_app.mongo.db
    data = request.get_json()
    amount = data.get("amount")
    reason = data.get("reason")

    if amount is None or not reason:
        return jsonify({
            "success": False,
            "message": "Missing 'amount' or 'reason'"
        }), 400

    decrement_productivity_points(db, amount, reason)
    return jsonify({
        "success": True,
        "message": f"Points decremented by {amount} for reason: '{reason}'"
    }), 200


# ---------------- RESET ALL ----------------

@tracker_bp.route('/reset-all', methods=['POST'])
def reset_all():
    db = current_app.mongo.db
    try:
        reset_all_settings(db)
        return jsonify({"message": "All settings have been reset successfully."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
