import { NavLink } from "react-router-dom";
import withRouter from "./WithRouter";

const items = [
  { name: "Home", to: "/" },
  { name: "About-us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
];

const Navigation = () => {
  return (
    <nav className="bg-slate-200 p-5 rounded-lg font-bold">
      <ul className="flex items-center gap-x-5">
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to} className="activeLink">
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
