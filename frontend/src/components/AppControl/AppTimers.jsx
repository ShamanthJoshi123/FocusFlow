export default function AppTimers() {
  return (
    <div className="bg-cardblue text-black rounded-md p-4 mt-4">
      <div className="mb-2">
        <h3>⏳ App Timers</h3>
      </div>
      <div className="space-y-2">
        <div className="bg-minicardgrey p-2 rounded-md flex justify-between">
          <span>Chrome</span>
          <span>Limit: 1h/day</span>
        </div>
        <div className="bg-minicardgrey p-2 rounded-md flex justify-between">
          <span>YouTube</span>
          <span>Limit: 30m/day</span>
        </div>
      </div>
    </div>
  );
}

