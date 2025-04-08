import { Download } from "lucide-react";

const UserHistory = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-black dark:text-white">
      <h3 className="font-semibold mb-3">User History</h3>
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-2 text-left">Date of Visit</th>
            <th className="p-2 text-left">Report</th>
            <th className="p-2 text-left">Score</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t dark:border-gray-700">
            <td className="p-2">13 Mar 2025</td>
            <td className="p-2">Focus on Sleep</td>
            <td className="p-2">89%</td>
            <td className="p-2 text-green-600">Completed</td>
          </tr>
          <tr className="border-t dark:border-gray-700">
            <td className="p-2">14 Mar 2025</td>
            <td className="p-2">Good</td>
            <td className="p-2">95%</td>
            <td className="p-2 text-green-600">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserHistory;
