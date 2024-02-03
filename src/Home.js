import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Slider from "./components/slider/Slider";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner/>
        <Slider/>
      </BrowserRouter>
    </div>
  );
};

export default Home;
