import { useState } from "react";

export default function ResetButton() {
  const [isResetting, setIsResetting] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!confirm("Are you sure you want to reset all tracker settings?")) return;

    try {
      setIsResetting(true);
      const response = await fetch("/api/tracker/reset", {
        method: "POST",
      });

      if (!response.ok) throw new Error("Reset failed");

      setMessage("All settings have been reset!");
    } catch (error) {
      setMessage("Something went wrong.");
    } finally {
      setIsResetting(false);

      // Optionally reload or trigger refresh of all components
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={handleReset}
        disabled={isResetting}
        className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50"
      >
        {isResetting ? "Resetting..." : "Reset All Settings"}
      </button>
      {message && <span className="ml-4 text-sm text-green-600">{message}</span>}
    </div>
  );
}
