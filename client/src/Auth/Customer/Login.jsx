import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("User Login submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-lg w-96 space-y-6"
      >
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/user-register"
          className="text-green-600 font-bold hover:underline"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default UserLogin;
