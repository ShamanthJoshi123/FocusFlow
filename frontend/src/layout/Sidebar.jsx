import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/todo", label: "To-Do List" },
  { to: "/reports", label: "Reports" },
  { to: "/app-control", label: "App Control" },
];

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-45 bg-logoblue min-h-screen flex flex-col justify-between">
      <nav className="flex flex-col gap-4 p-6">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium ${
                isActive
                  ? "bg-amber-400 text-white"
                  : "text-white hover:bg-gray-600"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
