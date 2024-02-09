import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { productData, responsive } from "./data";
import ItemSlide from "./ItemSlide";
import "./Slider.css";

export default function Slider() {
  const product = productData.map((item) => (
    <div key={item.id}>
      <ItemSlide
      name={item.name}
      url={item.imageurl}
      page={item.page}
      Author={item.Author}
    />
    </div>
  ));

  return (
    <div className="slider">
      <Carousel
        showDots={true}
        responsive={responsive}
        // autoPlay={true}
        // infinite={true}
      >
        {product}
      </Carousel>
    </div>
  );
}
