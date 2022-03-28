import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="lg:hidden bg-siteColor py-6">
        <div className="flex flex-row items-center justify-between max-w-md  mx-auto ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
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
          <span className="text-white text-xl font-bold">Özkan's Blog</span>
          <div />
        </div>
      </div>
      {/* 
      <div className="w-full bg-indigo-600 lg:hidden">
        <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto">s</div>
      </div>
      */}
    </>
  );
};

export default MobileMenu;
