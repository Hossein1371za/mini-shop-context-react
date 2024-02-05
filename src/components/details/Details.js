import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import "./Details.css"

const Details = () => {
  const value = useContext(DataContext);
  const [detailsBook, setDetailsBook] = value.detailsBook;
  
  console.log(detailsBook);
  return (
    <div className="singleData-card" key={detailsBook.id}>
      <div className="singleData-title">
        <img src={detailsBook.image_url} alt="#" />
        <h4>نویسنده : {detailsBook.authors}</h4>
        <h6>{detailsBook.title}</h6>
        <p>
          {detailsBook.description}
          
        </p>
      </div>
      <div className="about-book">
        <p>تعداد صفحات : {detailsBook.num_pages}</p>
        <p>امتیاز : {detailsBook.rating}</p>
      </div>
    </div>
  );
};

export default Details;
