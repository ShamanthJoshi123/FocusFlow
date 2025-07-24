import { useEffect, useState } from "react";
import axios from "axios";

export default function TrackerStatus() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tracker/status")
      .then((res) => {
        setStatus(res.data.tracker_status);
      })
      .catch((err) => {
        console.error("Failed to fetch tracker status:", err);
      });
  }, []);

  const toggleStatus = () => {
    const newStatus = !status;
    axios.post("http://localhost:5000/api/tracker/status", { status: newStatus })
      .then((res) => {
        setStatus(newStatus);
      })
      .catch((err) => {
        console.error("Failed to update tracker status:", err);
      });
  };

  return (
    <div className="flex items-center justify-between bg-cardblue text-black m-4 p-4 rounded-md">
      <h3>▶️ Tracker Status: {status ? "ON ✅" : "OFF ❌"}</h3>
      <button
        onClick={toggleStatus}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        {status ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}


