import React from "react";
import CarouselView from "../components/CarouselView/CarouselView";
import Image from "next/image";
import img1 from "../../public/assets/Ellipse 3.png";
import img2 from "../../public/assets/Ellipse 15.png";
import img3 from "../../public/assets/Group 2.png";
import img5 from "../../public/assets/IMG_6570.jpg";
import img6_1 from "../../public/assets/wooden-spoon-with-pepper-spice-on-black-background-CUARD63 1.png";
import img6_2 from "../../public/assets/assorted-peppercorns-FE2NS6L 3.png";
import img6_3 from "../../public/assets/Ellipse 16.png";
import img7 from "../../public/assets/Ellipse 17.png";
import logo from "../../public/logo512.png";
import logoWhite from "../../public/logoBlanco.png";
import s from "../styles/pages/home.module.scss";

const index = () => {
  return (
    <div className = {s.container}>
      <section id = "sectionOne" className={s.section1}>
        {/* section 1*/}
        <div className={s.imgContainer}>
        <Image src={img1} alt="image principal banner" 
        layout="fill"
        objectFit="cover"
        />
        </div>
        <div>
          <p>Nutrition</p>
          <p>, Technology &</p>
          <p> Motivation</p>
        </div>
          <h1>"We focus on the journey"</h1>
      </section>
      <section id = "sectionTwo">
        {/* section 2*/}
        <Image src={img2} alt="image section 2" />
        <div>
          <h1>¿What is</h1>
          <Image src={logo} alt="logo" />
          <h1>?</h1>
        </div>
      <div>
        <p>Kutay:</p>
        <p>Arhuaco indigenous dialect word that means</p>
      </div>
      <h3>"back to the origin"</h3>
      </section>
      <section>
        {/* section 3*/}
        <h1>¡Here is how we do it!</h1>
        <Image src={img3} alt="image section 3" />
        </section>
        <section>
          {/* section 4*/}
          <h1> Dynamic Nutritional Evaluation</h1>
          <CarouselView />
        </section>
        <section>
          {/* section 5*/}
          <Image src={img5} alt="image section 4" />

          <h1>Wearable techbology for our advanced users</h1>
          <h3>Take your journey to the next step</h3>
        </section>

        <section>
          {/* section 6 */}
          <Image src={img6_1} alt="image section 6.1" />
          <Image src={img6_2} alt="image section 6.2" />
          <Image src={img6_3} alt="image section 6.3" />
          <p>
            "The industry and the scince of nutrition is moving beyond the
            simple device to holistic solutions that include nutrition,
            technologu and motivation. The kutai solution appears to be in
            alignment with this view"
          </p>
          <p>David Metclaf, PhD</p>
          <p>Director of the mixed Emerging</p>
          <p>Technology Integration Lab at UCF.</p>
        </section>
        <section>
          {/* section 7 */}
          <h2>Contact us</h2>
          <Image src={img7} alt="image section 7" />
          <div>
            <p>(+57)300 786 6187</p>
            <p>info@kutai.co</p>
            <p>Nit: 901 465 463</p>
          </div>
          <Image src={logoWhite} alt="white_logo" />
        </section>
    </div>
  );
};

export default index;
