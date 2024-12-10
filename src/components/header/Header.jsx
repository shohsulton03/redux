import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="sticky top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="text-2xl font-bold">My App</div>
        <div className="flex gap-8">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "border-b-2 border-white"
                  : "hover:text-gray-200 hover:border-b-2 border-gray-200"
              } transition duration-300`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/createuser"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "border-b-2 border-white"
                  : "hover:text-gray-200 hover:border-b-2 border-gray-200"
              } transition duration-300`
            }
          >
            Create User
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
