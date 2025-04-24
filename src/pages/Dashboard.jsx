export default function Dashboard() {
  return (
    <main className="h-full flex-grow overflow-y-auto">
    <div className="grid grid-cols-[1fr_1fr_1.25fr] grid-rows-3 gap-3 auto-rows-min h-full">
    <div className="bg-cardblue rounded-xl p-3 shadow-lg">
      <h2 className="text-xl font-bold text-black">To-Do</h2>
      <p className="text-gray-600">[Add the Lists from To-Do]</p>
    </div>
    <div className="bg-cardblue rounded-xl p-3 shadow-lg">
      <h2 className="text-xl font-bold text-black">Quick Notes</h2>
      <p className="text-gray-600 mt-5">"Write anything on your mind..."</p>
    </div>
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
    <div className="bg-cardblue rounded-xl p-3 shadow-lg">
      <h2 className="text-xl font-bold text-black">App Usage Chart</h2>
      <p className="text-gray-600">[Insert Chart]</p>
    </div>
    <div className="bg-cardblue rounded-xl p-3 shadow-lg">
      <h2 className="text-xl font-bold text-black">Quote of the Day</h2>
      <p className="text-gray-600 text-5xl mt-3">"There is no tomorrow."</p>
    </div>
    <div className="bg-cardblue rounded-xl p-3 shadow-lg col-span-2">
      <h2 className="text-xl font-bold text-black">Productivity Highlights</h2>
      <div className="grid grid-cols-3 p-4 h-4/5 gap-3">
      <div className="bg-minicardgrey">
      <h2 className="text-xl text-black p-2">Most Used App Today</h2>
      <p className="p-2 text-black">YouTube — 2h 48m</p>
      </div>
      <div className="bg-minicardgrey">
      <h2 className="text-xl text-black p-2">Least Productive Hour</h2>
      <p className="p-2 text-black">3:00 PM - 4:00 PM was your biggest slump</p>
      </div>
      <div className="bg-minicardgrey">
      <h2 className="text-xl text-black p-2">Most Productive Day this week</h2>
      <p className="p-2 text-black">Completed 3 tasks on monday</p>
      </div>
      </div>
    </div>
    </div>
    </main>
  );
}
