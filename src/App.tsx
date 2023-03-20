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
import { Guide } from "./pages/Guide";
import { useState } from "react";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Clients } from "./pages/Clients";

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
            <Route path="/admin/guide" element={<Guide />} />
            <Route path="/admin/client" element={<Clients />} />
            <Route path="/admin/client/:id" element={<SingleClient sidebarOpen={sideBarOpen} setSidebarOpen={setSideBarOpen}/>} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
