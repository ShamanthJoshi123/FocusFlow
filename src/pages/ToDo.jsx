export default function ToDo() {
    return (
      <main>
        <div className="flex">
        <div>
          <button>
            +Add Task
          </button>
        </div>
        <div className="bg-gray-500 w-auto h-10 m-3 mt-0 flex justify-center items-center">
        Filter: [<span className="text-yellow-300 font-bold">All</span> | Done | Pending]
        </div>
        </div>
        <div className="grid min-h-screen grid-rows-[1fr_1fr_1fr_1.5fr]">
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            Task 1: Complete Weekly Report Review
            <h3>[Due][Edit]</h3>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            Task 2: Organize Next Week’s Goals
            <h3>[Due][Edit]</h3>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            Task 3: Declutter Digital Workspace
            <h3>[Due][Edit]</h3>
          </div>
          <div className="bg-cardblue text-black m-3 rounded-md p-2">
            Streak Tracker: 3 Days 🔥
            <h3>Progress Bar: 75%</h3><br />
            <h3>[Progress Bar]</h3>
          </div>
        </div>
      </main>
  )}
  