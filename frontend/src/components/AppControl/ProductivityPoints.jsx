export default function ProductivityPoints() {
  const currentPoints = 120;
  const nextBadgePoints = 200;
  const percentage = (currentPoints / nextBadgePoints) * 100;

  return (
    <div className="h-full bg-cardblue text-black p-4 rounded-md shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-2">🎯 Productivity Points</h2>
        <p className="mb-4">
          You’ve earned <span className="font-bold">{currentPoints}</span> points this week.
        </p>

        {/* Badge Progress */}
        <div className="mb-2 flex items-center justify-between text-sm">
          <span>Next Badge</span>
          <span className="font-semibold">{currentPoints}/{nextBadgePoints}</span>
        </div>

        <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-600 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm">Keep going to earn your next badge!</p>
        <div className="mt-2 inline-block px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800 font-medium shadow">
          🏅 Bronze Badge
        </div>
      </div>
    </div>
  );
}



