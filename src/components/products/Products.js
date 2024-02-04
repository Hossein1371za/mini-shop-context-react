import React, { useContext,useState } from "react";
import { DataContext } from "../context/Context";
import { Link } from "react-router-dom";

const Products = () => {
  const value = useContext(DataContext);
  const [products, setProducts] = value.Product;
  const [visible,setVisible] = useState(5)
  
  return (
    <>
      <h1>کتاب با زبان انگلیسی</h1>
      <div className="container">
        <div className="product">
          {products.slice(2, visible).map((product) => {
            return (
              <div className="products-card" key={product.id}>
                <div className="products-title">
                  <h6>{product.title}</h6>
                </div>
                <div className="product-img">
                  <img src={product.image_url} alt="#" />
                </div>
                <div className="numpage-rate">
                  <Link
                    className="product-details"
                  >
                    مشاهده جزییات
                  </Link>
                  <p>امتیاز:{product.rating}</p>
                </div>
                <button
                  className="add-book"
                >
                  اضافه کردن به کتابخانه
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
