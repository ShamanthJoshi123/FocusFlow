import TrackerStatus from "../components/AppControl/TrackerStatus";
import TrackedApps from "../components/AppControl/TrackedApps";
import Blacklist from "../components/AppControl/Blacklist";
import AppTimers from "../components/AppControl/AppTimers";
import ViolationLog from "../components/AppControl/ViolationLog";
import ProductivityPoints from "../components/AppControl/ProductivityPoints";
import ResetButton from "../components/AppControl/ResetButton"; 

export default function AppControl() {
  return (
    <main>
      <div className="flex justify-between items-center px-4 py-2">
        <TrackerStatus />
        <ResetButton /> 
      </div>

      <div className="min-h-[80vh] grid grid-cols-2 grid-rows-3 gap-4 p-4 m-4">
        <div className="col-start-1 row-start-1">
          <TrackedApps />
        </div>
        <div className="col-start-1 row-start-2">
          <Blacklist />
        </div>
        <div className="col-start-1 row-start-3">
          <AppTimers />
        </div>
        <div className="col-start-2 row-start-1">
          <ViolationLog />
        </div>
        <div className="h-full col-start-2 row-start-2 row-span-2">
          <ProductivityPoints />
        </div>
      </div>
    </main>
  );
}


  