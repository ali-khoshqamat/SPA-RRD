import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Download from "../components/Download";
import SideBar from "../components/SideBar";

const ProfilePage = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <p>This is Profile Page!</p>
        <SideBar />
      </div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </div>
  );
};

export default ProfilePage;
