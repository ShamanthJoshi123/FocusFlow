from datetime import datetime, timedelta
from pymongo import MongoClient
from bson import ObjectId

client = MongoClient("mongodb://localhost:27017/")
db = client["focusflow"]
todo_collection = db["todo"]
stats_collection = db["todo_stats"]

def add_task(user_id, title, category):
    task = {
        "user_id": user_id,
        "title": title,
        "category": category,
        "created_at": datetime.now().strftime('%Y-%m-%d'),
        "completed": False,
        "completed_on": None
    }
    todo_collection.insert_one(task)
    return task

def get_tasks(user_id):
    return list(todo_collection.find({"user_id": user_id}))

def update_task(task_id, updated_fields):
    return todo_collection.update_one({"_id": ObjectId(task_id)}, {"$set": updated_fields})

def delete_task(task_id):
    return todo_collection.delete_one({"_id": ObjectId(task_id)})

def toggle_complete(task_id, status):
    update_fields = {"completed": status}
    today_str = datetime.now().strftime('%Y-%m-%d')

    if status:
        update_fields["completed_on"] = today_str
        task = todo_collection.find_one({"_id": ObjectId(task_id)})
        if task and not task.get("completed"):  # Avoid double-counting
            update_stats(task["user_id"], today_str, +1)
    else:
        update_fields["completed_on"] = None
        task = todo_collection.find_one({"_id": ObjectId(task_id)})
        if task and task.get("completed_on"):
            update_stats(task["user_id"], task["completed_on"], -1)

    return todo_collection.update_one({"_id": ObjectId(task_id)}, {"$set": update_fields})

# 📌 Update stats count for a day (increment/decrement)
def update_stats(user_id, date_str, delta):
    stats_collection.update_one(
        {"user_id": user_id, "date": date_str},
        {"$inc": {"completed_count": delta}},
        upsert=True
    )

# ✅ Persistent Streak
def get_streak(user_id):
    today = datetime.now().date()
    streak = 0

    for i in range(30):
        check_date = (today - timedelta(days=i)).strftime('%Y-%m-%d')
        record = stats_collection.find_one({"user_id": user_id, "date": check_date})
        if record and record.get("completed_count", 0) > 0:
            streak += 1
        else:
            break
    return streak

# ✅ Persistent Progress
def get_progress(user_id):
    today_str = datetime.now().strftime('%Y-%m-%d')

    all_tasks = list(todo_collection.find({
        "user_id": user_id,
        "created_at": today_str
    }))
    completed_tasks = [t for t in all_tasks if t.get("completed")]

    total = len(all_tasks)
    completed = len(completed_tasks)
    rate = (completed / total) * 100 if total > 0 else 0

    return {
        "total_tasks": total,
        "completed_tasks": completed,
        "completion_rate": round(rate, 2)
    }




