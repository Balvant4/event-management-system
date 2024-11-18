import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-purple-600 text-white p-4 text-2xl font-bold">
        Admin Dashboard
      </header>
      <main className="flex-grow p-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Event Providers</h2>
            <Link
              to="/admin/event-providers"
              className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
            >
              View Event Providers
            </Link>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Customers</h2>
            <Link
              to="/admin/customers"
              className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
            >
              View Customers
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
