export default function ProductivityHighlights() {
  return (
    <div className="bg-cardblue rounded-xl p-3 shadow-lg col-span-2">
      <h2 className="text-xl font-bold text-black">Productivity Highlights</h2>
      <div className="grid grid-cols-3 p-4 h-4/5 gap-3">
        <div className="bg-minicardgrey">
          <h2 className="text-xl text-black p-2">Most Focused App Today</h2>
          <p className="p-2 text-black">Excel — 1h 32m</p>
        </div>
        <div className="bg-minicardgrey">
          <h2 className="text-xl text-black p-2">Top Distracting App</h2>
          <p className="p-2 text-black">YouTube — 2h 48m</p>
        </div>
        <div className="bg-minicardgrey">
          <h2 className="text-xl text-black p-2">Active Days This Week</h2>
          <p className="p-2 text-black">"You've used FocusFlow for 5 of the last 7 days"</p>
        </div>
      </div>
    </div>
  );
}
