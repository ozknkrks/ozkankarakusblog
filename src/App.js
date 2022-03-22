import React from "react";
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

//import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="flex flex-row bg-transparent w-full">
      <Sidebar />
      <div className="flex-1 bg-transparent ">
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:blogTitle-:blogId" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
