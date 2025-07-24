import React, { useEffect, useState } from 'react';
import TaskCard from '../components/ToDo/TaskCard';
import AddTaskButton from '../components/ToDo/AddTaskButton';
import TaskFilter from '../components/ToDo/TaskFilter';
import ProgressTracker from '../components/ToDo/ProgressTracker';
import StreakTracker from '../components/ToDo/StreakTracker';

import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
  fetchProgress,
  fetchStreak,
} from '../api/todo';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [isAdding, setIsAdding] = useState(false); // ➕ New draft task toggle

  // 🧠 Load data on mount
  useEffect(() => {
    const loadData = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);

      const streakVal = await fetchStreak();
      setStreak(streakVal);

      const prog = await fetchProgress();
      setProgress(prog);
    };

    loadData();
  }, []);

  // ➕ Show empty editable TaskCard
  const handleAddTask = () => {
    setIsAdding(true);
  };

  // ✅ When user finishes entering new task → Save to DB
  const handleSaveNewTask = async (taskData) => {
    const today = new Date().toISOString().split('T')[0];
    const newTask = {
      ...taskData,
      completed: false,
      createdAt: today,
    };
    const added = await addTask(newTask);
    setTasks([...tasks, added]);
    setIsAdding(false);
    refreshStats();
  };

  // ❌ If user cancels adding
  const handleCancelNewTask = () => {
    setIsAdding(false);
  };

  const handleToggleComplete = async (id) => {
    const task = tasks.find(t => t._id === id);
    const updated = await updateTask(id, { completed: !task.completed });
    setTasks(tasks.map(t => t._id === id ? updated : t));
    refreshStats();
  };

  const handleEditTask = async (id, changes) => {
    const updated = await updateTask(id, changes);
    setTasks(tasks.map(t => t._id === id ? updated : t));
  };

  const refreshStats = async () => {
    const streakVal = await fetchStreak();
    setStreak(streakVal);

    const prog = await fetchProgress();
    setProgress(prog);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <AddTaskButton onAdd={handleAddTask} />
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      </div>

      <div className="mt-4">
        {isAdding && (
          <TaskCard
            task={{ name: '', priority: 'Medium' }}
            taskNumber={tasks.length + 1}
            onSave={handleSaveNewTask}
            onCancel={handleCancelNewTask}
            isNew={true}
          />
        )}
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <TaskCard
              key={task._id}
              task={task}
              taskNumber={index + 1}
              onToggleComplete={handleToggleComplete}
              onEdit={handleEditTask}
            />
          ))
        ) : (
          !isAdding && <p className="text-gray-500 mt-4">No tasks to show.</p>
        )}
      </div>

      <StreakTracker streak={streak} />
      <ProgressTracker completedCount={progress.completed} totalCount={progress.total} />
    </div>
  );
};

export default ToDo;






  