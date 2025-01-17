// src/pages/dashboard/Overview.jsx
import { FaUsers, FaChartLine, FaDollarSign, FaTasks } from "react-icons/fa";
import { Link } from "react-router";

const Overview = () => {
  return (
    <div className="p-6 lg:p-10 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 text-left lg:text-center mb-8">
        Dashboard Overview
      </h1>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
          <FaUsers className="text-blue-600 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold text-gray-800">1,245</p>
          </div>
        </div>

        {/* Sales */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
          <FaDollarSign className="text-green-600 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold text-gray-800">$58,300</p>
          </div>
        </div>

        {/* Active Tasks */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
          <FaTasks className="text-yellow-500 text-4xl" />
          <div>
            <Link to="../../../../dashboard/tasks" className="text-lg font-semibold">Active Tasks</Link>
            <p className="text-2xl font-bold text-gray-800">73</p>
          </div>
        </div>

        {/* Growth */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:scale-105 transition-transform">
          <FaChartLine className="text-purple-600 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Monthly Growth</h2>
            <p className="text-2xl font-bold text-gray-800">12.5%</p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-10 bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <span>📝 New user registered</span>
            <span className="text-sm text-gray-500">2 mins ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>💼 New project launched</span>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>✅ Task completed</span>
            <span className="text-sm text-gray-500">3 hours ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>📈 Sales report generated</span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
