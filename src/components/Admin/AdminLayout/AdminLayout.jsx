import React from "react";
import InNavbar from "../../InNavBar";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";

import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <InNavbar />
      <div className="admin-main">
      <SidebarAdmin />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;