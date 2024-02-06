import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";



const Core = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Core;
