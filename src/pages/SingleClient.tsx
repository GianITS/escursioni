import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminSideBar } from "../components/AdminSideBar";
import { Client } from "./Guide";

export const SingleClient: React.FunctionComponent<{
  sidebarOpen: boolean;
  setSidebarOpen: (sideOpen: boolean) => void;
}> = (props) => {
const { sidebarOpen, setSidebarOpen } = props;
  const [user, setUser] = useState([]);
  const { clientId } = useParams();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/client/" + clientId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resp) => {
        console.log(resp);
        setUser(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="h-100 d-flex justify-content-end border border-danger">
      <div
        className={
          "px-3 border border-success view-container " + (sidebarOpen && "open")
        }
      >
        <div className="container">
          {user &&
            user.map((item: Client, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-3" key={item.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="img"></div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.first_name} {item.last_name}
                        </h5>
                        <p className="card-text">E-mail: {item.email}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            City: {item.city}
                          </small>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Sesso: {item.gender}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
