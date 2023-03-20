import React from "react";
import PersonIcon from "@mui/icons-material/Person";

export const AdminTopBar = () => {
  return (
    <>
      <div className="topBar">
        <h3 className="msg-welcome text-white">Welcome, Gianluca!</h3>
        <button className="btn d-inline-flex align-items-center rounded border-0 text-white">
          <span className="me-2">
            <PersonIcon fontSize="large" />
          </span>
          Account
        </button>
      </div>
    </>
  );
};
