import React, { createContext,useState,useEffect } from "react";
import axios from "axios"

const API_URL = "https://example-data.draftbit.com/books?_limit=50";
export const DataContext = createContext();



export const DataProvider = (props) => {
    const [products,setProuducts] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    
    async function fetchData(){
        await axios.get(API_URL)
        .then((res)=>setProuducts(res.data))
        .catch((err)=>console.log(err.data))
    }
console.log(products)

    const value={
        products:[products,setProuducts]
    }



  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
export default DataContext