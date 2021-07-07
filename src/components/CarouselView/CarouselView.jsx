import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../../public/assets/IMG_6570.jpg"
import Image from "next/image"
var Carousel = require("react-responsive-carousel").Carousel;

const CarouselView = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
      >
        <div>
          <Image src= {img} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src= {img} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src= {img} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselView;
