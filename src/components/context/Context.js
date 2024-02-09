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
  const [library,setLibrary] = useState([])
  const addToLibrary =(id)=>{
      const check = library.every(item=>{
        return item.id !== id
      })
        if(check){
          const data = products.filter(product =>{
            return product.id === id
           })
           setLibrary([...library,...data])
        }else{
          alert("این کتاب در کتابخانه شما موجود است.")
        }
     }
     const deleteItem =(id)=>{
      const newLibrary= library.filter(item => item.id !== id)
      setLibrary(newLibrary)
     }
  

  const value = {
    products: [products, setProducts],
    detailsBook:[detailsBook,setDetailsBook],
    addToLibrary,
    library :[library,setLibrary],
    deleteItem
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
