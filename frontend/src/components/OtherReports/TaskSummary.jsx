export default function TaskSummary() {
  return (
    <div className="bg-cardblue text-black rounded-md p-4">
      <h2 className="font-semibold text-lg mb-2">✅ Task Summary</h2>
      <p>
        Tasks Completed: 7<br /><br />
        Avg Task Duration: 34 mins<br /><br />
        Task Completion Rate: 75%
      </p>
    </div>
  );
}
