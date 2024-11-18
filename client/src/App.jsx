import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./MainDashboard";
import AdminLogin from "./Auth/Admin/LoginPage";
import UserLogin from "./Auth/Customer/Login";
import UserRegister from "./Auth/Customer/Register";
import EventProviderLogin from "./Auth/EventProvider/Login";
import EventProviderRegister from "./Auth/EventProvider/Register";
import AdminDashboard from "./AuthDashboard/AdminDashboaed";
import EventProviderList from "./components/EventProvideList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-register" element={<UserRegister />} />
      <Route path="/event-provider-login" element={<EventProviderLogin />} />
      <Route path="/event-provider-list" element={<EventProviderList />} />

      <Route
        path="/event-provider-register"
        element={<EventProviderRegister />}
      />
    </Routes>
  );
};

export default App;
