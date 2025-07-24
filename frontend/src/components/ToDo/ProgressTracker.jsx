import React from 'react';

const ProgressTracker = ({ completedCount, totalCount }) => {
  const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="my-4">
      <div className="text-sm mb-1">Progress: {percentage}%</div>
      <div className="w-full bg-gray-300 rounded h-2">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
