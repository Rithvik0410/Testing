import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuManagement from "./MenuManagement";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";
import SalesReports from "./SalesReports";
import FeedbackManagement from "./FeedbackManagement";
import "./adminDashboard.css"; // Add styles for the dashboard

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="menu" element={<MenuManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="reports" element={<SalesReports />} />
          <Route path="feedback" element={<FeedbackManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
