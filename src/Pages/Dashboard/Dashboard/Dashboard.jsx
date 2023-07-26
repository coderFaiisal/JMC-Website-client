import React, { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold">Dashboard</h2>

        {/* Statistics Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Statistic Box 1 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Total Events</h3>
            <p className="text-4xl font-bold">25</p>
          </div>

          {/* Statistic Box 2 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Registered Users</h3>
            <p className="text-4xl font-bold">150</p>
          </div>

          {/* Statistic Box 3 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Revenue</h3>
            <p className="text-4xl font-bold">$5000</p>
          </div>

          {/* Statistic Box 4 */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Pending Approvals</h3>
            <p className="text-4xl font-bold">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
