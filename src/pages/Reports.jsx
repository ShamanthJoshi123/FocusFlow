export default function Reports() {
    return (
      <main>
        <div className="bg-gray-500 w-auto h-10 m-3 mt-0 flex justify-center items-center">
        🔍 Filter: Today | <span className="text-yellow-300 font-bold">Week</span> | Month | Custom  
        </div>
        <div className="grid min-h-screen grid-cols-2 grid-rows-2">
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            <h2>🕐 App Usage Chart</h2>
            <h3 className="p-3">[Add Chart]</h3>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            <h2>📅 Productivity Trend</h2>
            <h3 className="p-3">[Add Chart]</h3>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            <h2>🚫 Distraction Log</h2>
            <p className="p-3">❗ Opened Instagram — 2:48 PM  <br /><br />
            ❗ Switched to YouTube — 3:10 PM
            </p>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            <h2>✅ Task Summary</h2>
            <p className="p-3">Tasks Completed: 7 <br /><br />
               Avg Task Duration: 34 mins <br /><br />
               Task Completion Rate: 75%
            </p>
          </div>
        </div>
      </main>
    )
  }
  