export default function WeeklyActivity() {
  return (
    <div className="bg-cardblue rounded-xl p-3 shadow-lg row-span-3">
      <h2 className="text-xl font-bold text-black">Weekly Activity</h2>
      <h1 className="text-black font-bold">30%</h1>
      <p className="text-gray-600">From last Week</p>
      <div className="grid grid-rows-3 p-4 h-4/5 gap-3">
        <div className="bg-minicardgrey">
          <h2 className="text-xl text-black p-2">Productivity Score</h2>
          <h3 className="p-2 text-black">78/100</h3>
          <p className="p-2 text-black">Good Work..</p>
        </div>
        <div className="bg-minicardgrey">
          <h2 className="text-xl text-black p-2">Tasks Completed</h2>
          <h3 className="p-2 text-black">9</h3>
          <p className="p-2 text-black">Keep Grinding!</p>
        </div>
        <div className="bg-minicardgrey">
          <h2 className="text-xl text-black p-2">Distractions Avoided</h2>
          <h3 className="p-2 text-black">6</h3>
          <p className="p-2 text-black">Lock In Champ</p>
        </div>
      </div>
    </div>
  );
}
