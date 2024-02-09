import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { Link } from "react-router-dom";
import "./Library.css"

const Library = () => {
    const value = useContext(DataContext)
    const deleteItem= value.deleteItem
    const [library]= value.library
  {
    if (library.length === 0) {
      return <h1 className="empty-book">کتابخانه شما خالی است</h1>;
    }
  }
  return (
    <div className="main">
      {library &&
        library.map((item) => {
          return (
            <div className="products-card" key={item.id}>
              <div className="products-title">
                <h6>{item.title}</h6>
              </div>
              <div className="product-img">
                <img src={item.image_url} alt="#" />
              </div>
              <div className="btn-group">
                <Link
                  className="read-book"
                  to={`/your-library/${item.id}`}
                >
                  خواندن کتاب
                </Link>
                <button
                  className="delete-book"
                  onClick={()=>deleteItem(item.id)}
                >
                  حذف از کتابخانه
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Library;
