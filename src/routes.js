import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  { path: "/", element: <HomePage />, exact: true },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile", element: <ProfilePage /> },
];

export default routes;
