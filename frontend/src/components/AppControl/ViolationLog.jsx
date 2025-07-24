export default function ViolationLog() {
  return (
    <div className="bg-cardblue text-black rounded-md p-4">
      <div className="mb-2">
        <h3>📛 Violation Log</h3>
      </div>
      <div className="space-y-2">
        <div className="bg-minicardgrey p-2 rounded-md flex justify-between">
          <span>Blocked YouTube</span>
          <span>⏱️ 3:15 PM</span>
        </div>
        <div className="bg-minicardgrey p-2 rounded-md flex justify-between">
          <span>Exceeded Chrome Time</span>
          <span>⏱️ 1:45 PM</span>
        </div>
      </div>
    </div>
  );
}

