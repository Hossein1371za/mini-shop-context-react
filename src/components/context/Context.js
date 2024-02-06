import React, { createContext, useEffect, useState } from "react";
import axios from "axios";




const API_url = "https://example-data.draftbit.com/books?_limit=50";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData(){
    await axios.get(API_url)
    .then((res)=>setProducts(res.data))
    .catch((err)=>console.log(err.data))
  }
  const [detailsBook,setDetailsBook] = useState("")
  

  const value = {
    products: [products, setProducts],
    detailsBook:[detailsBook,setDetailsBook],
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
