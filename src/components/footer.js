import React from "react";

const Footer = () => {
  return (
    <section
      style={{ fontFamily: "Poppins" }}
      className="w-full bg-gray-50 dark:bg-gray-900  flex items-center justify-center p-2 text-sm  dark:text-gray-300"
    >
      Designed with 💛 by{" "}
      <a
        href="https://www.instagram.com/ozkan.js/"
        target={"_blank"}
        className="ml-2"
      >
        Özkan Karakuş
      </a>
    </section>
  );
};

export default Footer;
