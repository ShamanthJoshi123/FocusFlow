export default function AppControl() {
    return (
      <main>
        <div className="flex">
        <div className="bg-cardblue text-black m-3 rounded-md p-2 w-1/2">
          <h3>▶️ Tracker Status: ON ✅/ OFF ❌ </h3>
        </div>
        <button className="ml-10">
          🔄 Reset All Settings
        </button>
        </div>
        <div className="grid min-h-screen grid-rows-2">
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            <div className="flex"> 
            <h3>🖥️ Tracked Apps</h3>
            <button className="ml-20 p-2 ">
              <h3 className="text-white">+ Add App to Track</h3>
            </button>
            </div>
            <div className="grid grid-rows-2 h-4/6 gap-2 m-2">
              <div className="bg-minicardgrey">
                <div className="flex p-2 mt-4 ml-2 space-x-20">
                <h3>Chrome</h3>
                <h3> ⏱️ 2h 12m </h3>
                <h3>⛔ Remove</h3>
                </div>
              </div>
              <div className="bg-minicardgrey">
                <div className="flex p-2 mt-4 ml-2 space-x-20">
                <h3>Youtube</h3>
                <h3> ⏱️ 1h 40m  </h3>
                <h3>⛔ Remove</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            <h3>⚙️ Settings</h3>
            <div className="m-3">
            <h4>Notification Alerts: ON ✅/ OFF ❌</h4> <br /><br />
            <h4>Dark Mode: ON🌙/ OFF🔆</h4> <br /><br />
            <h4>Auto-Start Tracker: ☑️</h4>
            </div>
          </div>
        </div>
      </main>
    )
  }
  