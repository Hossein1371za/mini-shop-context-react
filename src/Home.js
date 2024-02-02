import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner/>
      </BrowserRouter>
    </div>
  );
};

export default Home;
