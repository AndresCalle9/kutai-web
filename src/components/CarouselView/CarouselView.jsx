import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../public/assets/smartmockups_kqu0uxxs 1.png"
import img2 from "../../../public/assets/smartmockups_kqu0w8wi 1.png"
import img3 from "../../../public/assets/smartmockups_kqu12s4h 1.png"

import img4 from "../../../public/assets/Ellipse 9.png";


import Image from "next/image"


var Carousel = require("react-responsive-carousel").Carousel;

const CarouselView = () => {
  return (
    <div>
          <Image src= {img4} placeholder="blur" />
      <Carousel
        showArrows={false}
      >
        <div>
          <Image src= {img1} placeholder="blur" />
          <p className="legend">We focus on the holistic of ypur body</p>
        </div>
        <div>
          <Image src= {img2} placeholder="blur" />
          <p className="legend">KutAi: is an Ai powered wuide that helps you taking the best food choices towards a healthier life</p>
        </div>
        <div>
          <Image src= {img3} placeholder="blur" />
          <p className="legend">Make possible the change that you want</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselView;
