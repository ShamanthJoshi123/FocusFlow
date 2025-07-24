export default function TrackedApps() {
  return (
    <div className="bg-cardblue text-black rounded-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h3>🖥️ Tracked Apps</h3>
        <button className="text-white bg-blue-600 px-2 py-1 rounded-md">
          + Add App
        </button>
      </div>
      <div className="space-y-2">
        <div className="bg-minicardgrey p-2 rounded-md flex justify-between">
          <span>Chrome</span>
          <span>⏱️ 2h 12m</span>
          <span>⛔ Remove</span>
        </div>
        <div className="bg-minicardgrey p-2 rounded-md flex justify-between">
          <span>YouTube</span>
          <span>⏱️ 1h 40m</span>
          <span>⛔ Remove</span>
        </div>
      </div>
    </div>
  );
}
