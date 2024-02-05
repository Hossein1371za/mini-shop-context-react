import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Home from "./components/home/Home";



const Core = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products-item" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Core;