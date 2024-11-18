import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 p-8 space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight text-center">
        Event Management System
      </h1>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
        {/* Admin Section */}
        <div className="flex flex-col items-center space-y-4 bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-700">Admin</h2>
          <button
            onClick={() => navigate("/admin-login")}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Admin Login
          </button>
        </div>

        {/* User Section */}
        <div className="flex flex-col items-center space-y-4 bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-700">User</h2>
          <button
            onClick={() => navigate("/user-login")}
            className="w-full px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
          >
            User Login
          </button>
        </div>

        {/* Event Provider Section */}
        <div className="flex flex-col items-center space-y-4 bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-purple-700">
            Event Provider
          </h2>
          <button
            onClick={() => navigate("/event-provider-login")}
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition"
          >
            Event Provider Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
