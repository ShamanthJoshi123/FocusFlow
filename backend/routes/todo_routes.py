from flask import Blueprint, request, jsonify
from models.todo import (
    add_task,
    get_tasks,
    update_task,
    delete_task,
    toggle_complete,
    get_streak,
    get_progress
)

todo_bp = Blueprint("todo", __name__)

@todo_bp.route("/api/todo", methods=["POST"])
def create_task():
    data = request.json
    task = add_task(data["user_id"], data["title"], data["category"])
    return jsonify({"message": "Task added", "task": task}), 201

@todo_bp.route("/api/todo/<user_id>", methods=["GET"])
def fetch_tasks(user_id):
    tasks = get_tasks(user_id)
    for task in tasks:
        task["_id"] = str(task["_id"])
    return jsonify(tasks)

@todo_bp.route("/api/todo/<task_id>", methods=["PATCH"])
def patch_task(task_id):
    data = request.json
    update_task(task_id, data)
    return jsonify({"message": "Task updated"})

@todo_bp.route("/api/todo/<task_id>", methods=["DELETE"])
def remove_task(task_id):
    delete_task(task_id)
    return jsonify({"message": "Task deleted"})

@todo_bp.route("/api/todo/complete/<task_id>", methods=["PATCH"])
def mark_complete(task_id):
    data = request.json
    toggle_complete(task_id, data["completed"])
    return jsonify({"message": "Task completion updated"})

@todo_bp.route("/api/todo/streak/<user_id>", methods=["GET"])
def streak_route(user_id):
    streak = get_streak(user_id)
    return jsonify({"streak": streak})

@todo_bp.route("/api/todo/progress/<user_id>", methods=["GET"])
def progress_route(user_id):
    progress = get_progress(user_id)
    return jsonify(progress)




