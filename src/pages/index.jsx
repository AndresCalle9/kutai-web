import React from "react";
import CarouselView from "../components/CarouselView/CarouselView";
import Image from "next/image";
import img1 from "../../public/assets/section1.png";
import img2 from "../../public/assets/section2.png";
import img3 from "../../public/assets/section3.png";
import img5 from "../../public/assets/section5.png";
import img6_1 from "../../public/assets/section6_1.png";
import img6_2 from "../../public/assets/section6_2.png";
import img6_3 from "../../public/assets/david_image.png";
import img7 from "../../public/assets/section7.png";
import img6_4 from "../../public/assets/section6_4.png";
import s from "../styles/pages/home.module.scss";

const index = () => {
  return (
    <div className={s.container}>
      <section id="sectionOne" className={s.section1}>
        {/* section 1*/}
        <div className={s.imgSct1}>
          <Image src={img1} alt="image principal banner" 
          placeholder="blur" 
          layout="responsive" />
          <div className={s.textSct1}>
            <p className={s.text1}>Nutrition</p>
            <p className={s.text2}>, Technology &</p>
            <p className={s.text3}>Motivation</p>
          </div>
        </div>
        <p className={s.phraseSct1}>"We focus on the journey"</p>
      </section>
      <section id="sectionTwo" className={s.section2}>
        {/* section 2*/}
        <div className={s.imgSct2}>
          <Image src={img2} alt="image section 2" objectFit="cover" />
          <div className={s.titleSct2}>
            <p>¿What is KutAi?</p>
          </div>
          <div className={s.textSct2}>
            <p className={s.text1}>Kutay:</p>
            <p className={s.text2}>
              Arhuaco indigenous dialect word that means.
            </p>
          </div>
        </div>
        <p className={s.phraseSct2}>"back to the origin"</p>
      </section>
      <section className={s.section3}>
        {/* section 3*/}
        <p>¡Here is how we do it!</p>
        <div className={s.imgSct3}>
          <Image src={img3} alt="image section 3" />
        </div>
      </section>
      <section className={s.section3} id="sectionFour">
        {/* section 4*/}
        <CarouselView />
      </section>
      <section className={s.section5} id="sectionFive">
        {/* section 5*/}
        <p>Wearable technology for our advanced users</p>
        <div className={s.imgSct5}>
          <Image src={img5} alt="image tech" layout="responsive" />
        </div>
        <div className={s.phraseSct5}>
          <div className={s.dot1}></div>
          <div className={s.dot2}></div>
          <div className={s.dot3}></div>

          <a>Take your journey to the next step</a>
        </div>
      </section>

      <section className={s.section6} id="sectionSix">
        {/* section 6 */}
        <div className={s.top}>
          <Image src={img6_1} alt="image spoon" layout="responsive"/>
        </div>
        <div className={s.middle1}>
          <Image src={img6_2} alt="image pepper" />
        </div>
        <div className={s.middle2}>
          <Image src={img6_4} alt="image section 6.4" />
        </div>
        <div className={s.bottom}>
          <div className={s.imgSct6}>
            <Image src={img6_3} alt="image section 6.3" layout="responsive" objectFit="cover"/>
          </div>
          <p className={s.paragraph}>
            "The industry and the science of nutrition is moving beyond the
            simple device to holistic solutions that include nutrition,
            technologu and motivation. The kutai solution appears to be in
            alignment with this view"
          </p>
          <p>David Metcalf, PhD</p>
          <p>Director of the mixed Emerging</p>
          <p>Technology Integration Lab at UCF.</p>
        </div>
      </section>
      
    </div>
  );
};

export default index;
