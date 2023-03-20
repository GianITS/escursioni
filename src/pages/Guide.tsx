import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminTopBar } from "../components/AdminTopBar";
import { SearchBar } from "../components/SearchBar";

export interface Client {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  city: string;
}

export const Guide: React.FunctionComponent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/guide")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const LoadDetail = (id: Number) => {
    navigate("/admin/guida/" + id);
  };

  return (
    <div>
      <AdminTopBar />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="container max-width90p text-center margin-search-bar px-0 mt-0">
        <h3 className="py-3 my-0">RUBRICA GUIDE</h3>
        <div className="row">
          {data &&
            data
              .filter((item: any) => {
                return search.toLowerCase() === ""
                  ? item
                  : Object.keys(item).some((key) => {
                      const client: Client = item[key];
                      return client.toString().toLowerCase().includes(search);
                    });
              })
              .map((item: Client, index) => (
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
                          <Button
                            onClick={() => {
                              LoadDetail(item.id);
                            }}
                          >
                            Visualizza
                          </Button>
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
