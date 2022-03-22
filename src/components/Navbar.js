import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between text-black bg-white dark:bg-gray-800 dark:text-white max-w-5xl mx-auto h-16 px-5 border-b border-b-gray-100 dark:border-b-gray-700">
      <span className="font-medium text-orange-500 text-lg">./Blackbird</span>
      <div className=" flex-row items-center space-x-6 hidden sm:flex">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "border-b border-b-orange-500 font-bold" : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b border-b-orange-500 font-bold" : "font-bold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "border-b border-b-orange-500 font-bold" : "font-bold"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "border-b border-b-orange-500 font-bold" : "font-bold"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b border-b-orange-500 font-bold" : "font-bold"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="sm:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
