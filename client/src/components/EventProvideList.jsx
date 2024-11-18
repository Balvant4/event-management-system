import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/event-providers").then((response) => {
      setProviders(response.data);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Event Providers</h1>
      <table className="table-auto bg-white shadow-lg w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider._id}>
              <td className="border px-4 py-2">{provider.name}</td>
              <td className="border px-4 py-2">{provider.email}</td>
              <td className="border px-4 py-2">{provider.status}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/admin/event-provider/${provider._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View
                </Link>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                  onClick={() => blockProvider(provider._id)}
                >
                  Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const blockProvider = (id) => {
  axios.patch(`/api/admin/event-provider/${id}/block`).then((response) => {
    alert(response.data.message);
    window.location.reload();
  });
};

export default EventProviderList;
