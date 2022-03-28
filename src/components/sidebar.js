import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const darkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryColor dark:scrollbar-thumb-gray-700  scrollbar-thumb-rounded-full scrollbar-track-transparent bg-siteColor dark:bg-gray-800 w-80 h-screen lg:flex flex-col items-center p-5 sticky top-0">
      <h1 className="text-white font-bold text-xl">Özkan's Blog</h1>
      <img
        alt="site photo"
        src="https://p4.wallpaperbetter.com/wallpaper/362/368/1023/kratos-god-of-war-games-ps-games-wallpaper-preview.jpg"
        className="w-40 h-40 mt-5 aspect-square object-cover rounded-full"
      />
      <span className="text-sm text-white mt-3 text-center">
        Hi, my name is Özkan Karakuş. Briefly introduce yourself here. You can
        also provide a link to the about page.
      </span>
      <a href="www.ozcankrks.com" className="text-white underline text-sm">
        Find out more about me
      </a>
      <div
        style={{ borderBottomWidth: 0.1 }}
        className="flex flex-row justify-center border-b-lightColor dark:border-b-gray-700 space-x-3 pb-4 w-full mt-5"
      >
        <a
          href="www.ozkankarakus.somee.com"
          className="bg-white hover:bg-gray-100 transform transition-all delay-200 dark:bg-siteColor w-8 h-8 items-center justify-center flex rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter fill-current text-siteColor dark:text-white w-4 h-4"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/ozknkrks"
          className="bg-white hover:bg-gray-100 transform transition-all delay-200 dark:bg-siteColor w-8 h-8 items-center justify-center flex rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github w-4 h-4 fill-current text-siteColor dark:text-white"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="www.ozkankarakus.somee.com"
          className="bg-white hover:bg-gray-100 transform transition-all delay-200 dark:bg-siteColor w-8 h-8 items-center justify-center flex rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-codepen w-4 h-4 stroke-current text-siteColor dark:text-white"
          >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <line x1="12" y1="22" x2="12" y2="15.5"></line>
            <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
            <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
            <line x1="12" y1="2" x2="12" y2="8.5"></line>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/%C3%B6zkan-karaku%C5%9F-a343b41a2/"
          target={"_blank"}
          className="bg-white hover:bg-gray-100 transform transition-all delay-200 dark:bg-siteColor w-8 h-8 items-center justify-center flex rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin w-4 h-4 stroke-current text-siteColor dark:text-white"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <div className="space-y-5 mt-5">
      <NavLink
          exact
          to="/"
          className={({ isActive }) =>
            isActive ? "activeNavItem" : "InactiveNavItem"
          }
        >
          <span className="ml-2">Anasayfa</span>
        </NavLink>
        <NavLink
          exact
          to="/blog"
          className={({ isActive }) =>
            isActive ? "activeNavItem" : "InactiveNavItem"
          }
        >
          <span className="ml-2">Blog</span>
        </NavLink>
        <NavLink
          exact
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "activeNavItem" : "InactiveNavItem"
          }
        >
          <span className="ml-2">Portfolio</span>
        </NavLink>
        
      </div>
      <button
        onClick={darkMode}
        className="flex items-center justify-center bg-secondaryColor hover:bg-thirdColor dark:bg-gray-600 dark:hover:bg-gray-700 text-white  rounded-md mt-4 p-2"
      >
        <span className="font-bold dark:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-moon fill-current text-white"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </span>
        <span className="font-bold dark:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </button>
      
    </div>
  );
};

export default Sidebar;
