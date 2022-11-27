import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <ul className="flex gap-x-2.5 border border-solid border-gray-400 px-2 rounded w-min">
        <li>
          <NavLink
            to="/profile/dashboard"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/download"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Download
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
