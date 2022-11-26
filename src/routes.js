import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile", element: <ProfilePage /> },
];

export default routes;
