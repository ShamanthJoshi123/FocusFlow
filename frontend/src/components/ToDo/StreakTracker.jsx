import React from 'react';

const StreakTracker = ({ streak }) => {
  return (
    <div className="mt-2 text-sm text-gray-700">
      🔥 Current Streak: <span className="font-semibold">{streak}</span> days
    </div>
  );
};

export default StreakTracker;
