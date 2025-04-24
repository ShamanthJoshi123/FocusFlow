import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const location = useLocation();

  const titleMap = {
    "/": "Dashboard",
    "/todo": "To-Do List",
    "/reports": "Reports",
    "/app-control": "App Control",
  };

  const currentPath = location.pathname;
  const currentTitle = titleMap[currentPath] || "FocusFlow";

  return (
    <header className="w-full h-20 bg-cyan-50 px-8 py-4 flex justify-between items-center border-b border-gray-700 shadow-md">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-black tracking-wide">
        {currentTitle}
      </h1>

      {/* Profile Info */}
      <div className="text-right">
        <p className="text-md font-semibold text-black">{user?.name}</p>
        <p className="text-sm text-gray-400">{user?.role}</p>
      </div>
    </header>
  );
}


