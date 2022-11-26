import Blog from "./components/Blog";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/post/:id", element: <PostPage /> },
  { path: "/post", element: <PostPage /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
// ([0-9]+)
// ([A-Za-z]+)
