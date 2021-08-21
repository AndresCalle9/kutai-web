import React from "react";
import s from "./Footer.module.scss";
import logoWhite from "../../../public/logoBlanco.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={s.container}>
      <section className={s.section7} id="sectionSeven">
        {/* section 7 */}
        <h2>Contact us</h2>
        {/* <div className={s.imgSct7}>
          <Image src={img7} alt="image section 7" />
        </div> */}
        <div className={s.textSct7}>
          <p>Email: info@kutai.co</p>
          <p>Nit: 901.465.463</p>
        </div>
        <div className={s.logoSct7}>
          <Image src={logoWhite} alt="white_logo" />
        </div>
      </section>
      <div className={s.footerInfo}>
        <h3>
          KutAi: is an Ai powered guide that helps you take the best food
          choices towards a healthier life
        </h3>
      </div>
    </div>
  );
};

export default Footer;
