import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-white dark:bg-gray-900">
      {/* Header Row with Logo + Navbar */}
      <div className="flex">
        {/* Top-left Logo */}
        <div className="w-45 bg-logoblue flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-25 h-23" />
        </div>

        {/* Top Navbar */}
        <div className="flex-1">
          <Navbar />
        </div>
      </div>

      {/* Main Body: Sidebar + Content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}





