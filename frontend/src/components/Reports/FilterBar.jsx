import { Link } from "react-router-dom";

export default function FilterBar() {
  return (
    <div className="bg-gray-500 w-auto h-10 m-3 mt-0 flex justify-between items-center px-4">
      <div>
        🔍 Filter: Today | <span className="text-yellow-300 font-bold">Week</span> | Month | Custom
      </div>
    </div>
  );
}


