import { Link } from "react-router-dom";
import DistractionLog from "../components/OtherReports/DistractionLog";
import TaskSummary from "../components/OtherReports/TaskSummary";
import DistractionsAvoided from "../components/OtherReports/DistractionsAvoided";
import MostFocusedApps from "../components/OtherReports/MostFocusedApps";
import TopDistractingApps from "../components/OtherReports/TopDistractingApps";
import ActiveDaysSummary from "../components/OtherReports/ActiveDaysSummary";

export default function OtherReports() {
  return (
    <main className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center flex-1">📈 Other Productivity Reports</h1>
        <Link
          to="/reports"
          className="text-sm text-yellow-300 font-semibold hover:underline"
        >
          ← Back to Reports
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <DistractionLog />
        <TaskSummary />
        <DistractionsAvoided />
        <MostFocusedApps />
        <TopDistractingApps />
        <ActiveDaysSummary />
      </div>
    </main>
  );
}

