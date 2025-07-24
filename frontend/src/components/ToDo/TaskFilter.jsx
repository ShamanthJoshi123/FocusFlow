import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'done', 'pending'];

  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
      
      {/* Filter Box */}
      <div className="text-gray-700">
        <span className="font-semibold mr-2">Filter:</span>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`ml-2 capitalize 
              ${currentFilter === filter ? 'text-blue-600 font-semibold' : 'text-gray-500'}
              hover:text-blue-500 transition-colors duration-150`}
          >
            {filter}
          </button>
        ))}
      </div>

    </div>
  );
};

export default TaskFilter;

