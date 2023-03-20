import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { SingleClient } from "./pages/SingleClient";
import { AdminLayout } from "./layout/AdminLayout";
import { HomePageLayout } from "./layout/HomePageLayout";
import { ClientsPage } from "./pages/ClientsPage";
import { useState } from "react";
import { AdminDashboard } from "./pages/AdminDashboard";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div>
      {/* <ToastContainer /> */}
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<AdminLayout sidebarOpen={sideBarOpen} setSidebarOpen={setSideBarOpen}/>} >
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/client" element={<ClientsPage />} />
            <Route path="/admin/client/:id" element={<SingleClient sidebarOpen={sideBarOpen} setSidebarOpen={setSideBarOpen}/>} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
