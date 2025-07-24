import { Link } from "react-router-dom";
import FilterBar from "../components/Reports/FilterBar";
import AppUsageChart from "../components/reports/AppUsageChart";
import ProductivityTrend from "../components/reports/ProductivityTrend";
import ProductivityScore from "../components/reports/ProductivityScore";
import FocusVsDistractionChart from "../components/reports/FocusVsDistractionChart";

export default function Reports() {
  return (
    <main>
      {/* Filter Bar */}
      <FilterBar />

      {/* Button to navigate to detailed reports */}
      <div className="flex justify-end px-6">
        <Link
          to="/reports/other"
          className="text-sm text-yellow-300 font-semibold hover:underline"
        >
          ➤ View Detailed Reports
        </Link>
      </div>

      {/* Report Charts */}
      <div className="grid min-h-screen grid-cols-2 grid-rows-2">
        <div className="bg-cardblue text-black m-3 rounded-md p-2">
          <h2>🕐 App Usage Chart</h2>
          <AppUsageChart />
        </div>
        <div className="bg-cardblue text-black m-3 rounded-md p-2">
          <h2>📅 Productivity Trend</h2>
          <ProductivityTrend />
        </div>
        <div className="bg-cardblue text-black m-3 rounded-md p-2">
          <h2>📊 Productivity Score</h2>
          <ProductivityScore />
        </div>
        <div className="bg-cardblue text-black m-3 rounded-md p-2">
          <h2>⚖️ Focus vs Distraction</h2>
          <FocusVsDistractionChart />
        </div>
      </div>
    </main>
  );
}


  