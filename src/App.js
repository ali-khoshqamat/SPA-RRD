import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="w-full h-screen bg-slate-50 p-6">
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
