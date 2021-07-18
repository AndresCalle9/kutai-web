import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../public/assets/section4_1.png";
import img2 from "../../../public/assets/section4_2.png";
import img3 from "../../../public/assets/section4_3.png";
import img4 from "../../../public/assets/section4_4.png";
import s from "./CarouselView.module.scss";

import Image from "next/image";

var Carousel = require("react-responsive-carousel").Carousel;

const CarouselView = () => {
  return (
    <div className={s.container}>
      <p> Dynamic Nutritional Evaluation</p>
      <div className={s.imgSct4}>
        <Image src={img4} placeholder="blur" />
      </div>
      <div className={s.carousel}>
        <Carousel showArrows={false}>
          <div>
            <Image src={img1} placeholder="blur" />
          </div>
          <div>
            <Image src={img2} placeholder="blur"/>
          </div>
          <div>
            <Image src={img3} placeholder="blur" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselView;
