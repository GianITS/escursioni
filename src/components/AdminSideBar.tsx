import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Person,
  PermContactCalendar,
  Call,
  CalendarMonth,
  DirectionsRun,
  Menu,
  LineAxis,
  Home,
} from "@mui/icons-material";

export const AdminSideBar: React.FunctionComponent<{
  sidebarOpen: boolean;
  setSidebarOpen: (sideOpen: boolean) => void;
}> = (props) => {
  const { sidebarOpen, setSidebarOpen } = props;
  const [activeTab, setActiveTab] = useState("DASHBOARD");
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={
          "flex-shrink-0 pb-3 sidebar " +
          (sidebarOpen ? "side-open" : "side-close")
        }
      >
        <Button
          className="btnMenu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </Button>
        <div
          className={
            "d-flex align-items-center justify-content-center position-relative mb-2 mt-4 " +
            (sidebarOpen ? "height-150" : "height-15")
          }
        >
          {sidebarOpen && (
            <div className="d-flex align-items-center logo"></div>
          )}
        </div>
        <ul className="list-unstyled ps-0">
          <li className="border-top my-3"></li>
          <li className="mb-1 li-hover ps-2">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn d-inline-flex align-items-center rounded border-0 text-white"
            >
              <span className="me-3">
                <Home fontSize="large" />
              </span>{" "}
              {sidebarOpen && "HOME"}
            </button>
          </li>
          <li
            className={
              "mb-1 li-hover ps-2 " +
              (activeTab === "DASHBOARD" && "bg-active")
            }
          >
            <button
              onClick={() => {
                setActiveTab("DASHBOARD");
                navigate("/admin");
              }}
              className="btn d-inline-flex align-items-center rounded border-0 text-white"
            >
              <span className="me-3">
                <LineAxis fontSize="large" />
              </span>{" "}
              {sidebarOpen && "DASHBOARD"}
            </button>
          </li>
          <li
            className={
              "mb-1 li-hover ps-2 " +
              (activeTab === "GUIDE" && "bg-active")
            }
          >
            <button
              onClick={() => {
                setActiveTab("GUIDE");
                navigate("/admin/guide");
              }}
              className="btn d-inline-flex align-items-center rounded border-0 text-white"
            >
              <span className="me-3">
                <DirectionsRun fontSize="large" />
              </span>{" "}
              {sidebarOpen && "GUIDE"}
            </button>
          </li>
          <li
            className={
              "mb-1 li-hover ps-2 " +
              (activeTab === "UTENTI" && "bg-active")
            }
          >
            <button
              onClick={() => {
                setActiveTab("UTENTI");
                navigate("/admin/client");
              }}
              className="btn d-inline-flex align-items-center rounded border-0 text-white"
            >
              <span className="me-3">
                <PermContactCalendar fontSize="large" />
              </span>{" "}
              {sidebarOpen && "UTENTI"}
            </button>
          </li>
          <li
            className={
              "mb-1 li-hover ps-2 " +
              (activeTab === "CALENDARIO" && "bg-active")
            }
          >
            <button className="btn d-inline-flex align-items-center rounded border-0 text-white">
              <span className="me-3">
                <CalendarMonth fontSize="large" />
              </span>{" "}
              {sidebarOpen && "CALENDARIO"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
