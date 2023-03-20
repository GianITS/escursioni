import React from "react";
import { AdminTopBar } from "../components/AdminTopBar";
import { CardGuide } from "../components/CardGuide";
import { KPI } from "../components/KPI";

export const AdminDashboard = () => {
  return (
    <>
    <AdminTopBar />
      <div className="row mx-0 mt-5 mb-5">
        <div className="col">
          <KPI />
        </div>
        <div className="col">
          <KPI />
        </div>
        <div className="col">
          <KPI />
        </div>
      </div>
      <div className="row mx-0">
        <div className="col p-0 my-5 ms-4">
          <h3>INDICE DI GRADIMENTO</h3>
        </div>
      </div>
      <div className="row mx-0 my-3">
        <div className="col p-0 my-2 mx-4">
          <CardGuide />
        </div>
        <div className="col p-0 my-2 mx-4">
          <CardGuide />
        </div>
      </div>
    </>
  );
};
