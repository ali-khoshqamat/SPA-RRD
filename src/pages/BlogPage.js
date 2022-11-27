import { NavLink } from "react-router-dom";

const items = [
  { name: "Blog-1", to: "/blogs/1" },
  { name: "Blog-2", to: "/blogs/2" },
  { name: "Blog-3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <div>
      <h2>This is Blogs Page!</h2>
      <ul className="">
        {items.map((item) => {
          return (
            <li key={item.to} className="text-red-600">
              <NavLink
                to={{ pathname: item.to, search: "sort=name&age=20" }}
                className={({ isActive }) => (isActive ? "text-red-600" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
