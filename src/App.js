import React, { useEffect } from "react";
import "./App.css";
//import BlogList from "./components/blog-list";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import MobileMenu from "./components/mobile-menu";
//import SearchBox from "./components/search-box";
import Blog from "./screens/blog";
//import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
//import About from "./screens/about";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./screens/blog-details";
//import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
//import About from "./pages/About";
import "moment/locale/tr";
import moment from "moment";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import PageNotFound from "./screens/page-not-found";
//import Navbar from "./components/Navbar";
const App = () => {
  useEffect(() => {
    /* 
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    */
    Prism.highlightAll();

    moment.locale("tr");
  }, []);

  return (
    <div className="flex flex-row bg-transparent w-full">
      <Sidebar />
      <div className="flex-1 bg-transparent ">
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogTitle-:blogId" element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
