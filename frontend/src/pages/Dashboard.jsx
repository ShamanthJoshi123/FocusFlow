// src/pages/DashBoard.jsx
import ToDoPreview from "../components/DashBoard/ToDoPreview";
import ProTips from "../components/DashBoard/ProTips";
import AppUsageChart from "../components/DashBoard/AppUsageChart";
import QuoteOfTheDay from "../components/DashBoard/QuoteOfTheDay";
import ProductivityHighlights from "../components/DashBoard/ProductivityHighlights";
import WeeklyActivity from "../components/DashBoard/WeeklyActivity";

export default function Dashboard() {
  return (
    <main className="h-full flex-grow overflow-y-auto">
      <div className="grid grid-cols-[1fr_1fr_1.25fr] grid-rows-3 gap-3 auto-rows-min h-full">
        <ToDoPreview />
        <ProTips />
        <WeeklyActivity />
        <AppUsageChart />
        <QuoteOfTheDay />
        <ProductivityHighlights />
      </div>
    </main>
  );
}

