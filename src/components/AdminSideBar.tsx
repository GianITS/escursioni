import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AdminSideBar: React.FunctionComponent<{
  sidebarOpen: boolean;
  setSidebarOpen: (sideOpen: boolean) => void;
}> = (props) => {
  const {sidebarOpen, setSidebarOpen} = props;
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={
          "flex-shrink-0 p-3 sidebar " +
          (sidebarOpen ? "side-open" : "side-close")
        }
      >
        <div className="h-auto d-flex align-items-center position-relative mb-2">
          <div className="d-flex align-items-center link-dark text-decoration-none h-30 text-white">
            {sidebarOpen && (
              <>
                <HomeIcon />
                <span className="fs-5 fw-semibold ms-2 me-4">FNS</span>
              </>
            )}
          </div>
          <Button
            className="btnMenu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </Button>
        </div>
        <hr className="hr" />
        <ul className="list-unstyled ps-0">
          <li className="mb-1 li-hover">
            <button onClick={() => {navigate("/")}} className="btn d-inline-flex align-items-center rounded border-0 text-white">
              <span className="me-3">
                <HomeIcon fontSize="large"/>
              </span>{" "}
              {sidebarOpen && "HOME"}
            </button>
          </li>
          <li className="mb-1 li-hover">
            <button onClick={() => {navigate("/admin")}} className="btn d-inline-flex align-items-center rounded border-0 text-white">
              <span className="me-3">
                <LineAxisIcon fontSize="large"/>
              </span>{" "}
              {sidebarOpen && "DASHBOARD"}
            </button>
          </li>
          <li className="mb-1 li-hover">
            <button onClick={() => {navigate("/admin/client")}}className="btn d-inline-flex align-items-center rounded border-0 text-white">
              <span className="me-3">
                <DirectionsRunIcon fontSize="large"/>
              </span>{" "}
              {sidebarOpen && "GUIDE"}
            </button>
          </li>
          <li className="mb-1 li-hover">
            <button className="btn d-inline-flex align-items-center rounded border-0 text-white">
              <span className="me-3">
                <CallIcon fontSize="large"/>
              </span>{" "}
              {sidebarOpen && "UTENTI"}
            </button>
          </li>
          <li className="mb-1 li-hover">
            <button className="btn d-inline-flex align-items-center rounded border-0 text-white">
              <span className="me-3">
                <CalendarMonthIcon fontSize="large"/>
              </span>{" "}
              {sidebarOpen && "CALENDARIO"}
            </button>
          </li>
          <li className="border-top my-3"></li>
        </ul>
      </div>
    </div>
  );
};
