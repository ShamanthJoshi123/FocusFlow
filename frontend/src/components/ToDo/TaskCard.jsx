import React, { useState } from 'react';

const TaskCard = ({ task, taskNumber, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedPriority, setEditedPriority] = useState(task.priority || 'Medium');

  const handleSave = () => {
    onEdit(task.id, { name: editedName, priority: editedPriority });
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4">
      {/* Title Row: Task number and name */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Task {taskNumber} :{" "}
        {isEditing ? (
          <input
            type="text"
            className="border-b border-gray-400 outline-none w-3/4 text-base"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          task.name
        )}
      </h2>

      {/* Bottom Row: Checkbox, Priority, Edit/Save */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="h-4 w-4"
          />

          <h2 className="text-black">Priority:</h2>
          {isEditing ? (
            <select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          ) : (
            <span className= {`text-sm px-2 py-1 rounded-full ${ 
              task.priority === 'High'
                ? 'bg-red-200 text-red-800'
                : task.priority === 'Medium'
                ? 'bg-yellow-200 text-yellow-800'
                : 'bg-green-200 text-green-800'
            }`}>
              {task.priority}
            </span>
          )}
        </div>

        <button
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }
          }}
          className="text-blue-600 hover:underline text-sm"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;



