import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminTopBar } from "../components/AdminTopBar";
import { SearchBar } from "../components/SearchBar";
import { Delete, Edit } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/material";
import axios from "axios";

export interface Client {
  readonly id: number;
  first_name: string;
  last_name: string;
  via: string;
  data_nascita: string;
  data_registrazione: string;
  email: string;
  phone: string;
}

export const Clients = () => {
  const [data, setData] = useState<Client[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // setError(null);
      setisLoading(true);
      // const response2 = await axios.get("https://reqres.in/api/users?delay=1");
      const response = await axios.get("http://127.0.0.1:5000/clients");
      setData(response.data.data);
    } catch (error) {
      console.error(error);
      // setError(error.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const LoadDetail = (id: Number) => {
    navigate("/admin/client/" + id);
  };

  return (
    <div>
      <AdminTopBar />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="container max-width90p text-center margin-search-bar px-0 mt-0">
        {isLoading && (
          <div className="spinner">
            <CircularProgress color="secondary" />
          </div>
        )}
        <h3 className="py-3 my-0">RUBRICA UTENTI REGISTRATI</h3>
        <table className="table">
          <thead>
            <tr className="bg-black text-white table-head align-middle">
              <th scope="col"></th>
              <th scope="col">NOME E COGNOME</th>
              <th scope="col">INDIRIZZO</th>
              <th scope="col">DATA DI NASCITA</th>
              <th scope="col">DATA DI REGISTRAZIONE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">CELLULARE</th>
            </tr>
          </thead>
          <tbody>
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
                  <tr key={index} className="align-middle table-hover">
                    <td>
                      <div className="d-flex">
                        <IconButton color="warning" component="label">
                          <Edit />
                        </IconButton>
                        <IconButton color="primary" component="label">
                          <Delete />
                        </IconButton>
                      </div>
                    </td>
                    <td className="pointer" onClick={() => {LoadDetail(item.id)}}>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.via}</td>
                    <td>{item.data_nascita}</td>
                    <td>{item.data_registrazione}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
