import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Profile from "./pages/ProfilePage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="w-full h-screen bg-slate-50 p-6">
      <Layout>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
