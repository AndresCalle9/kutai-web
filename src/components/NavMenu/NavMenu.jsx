import React from "react";
import s from "./NavMenu.module.scss";
import Image from "next/image";
import logo from "../../../public/logoBlanco.png"

const NavMenu = ({ toggleMenu }) => {
  return (
    <div className={s.container}>
      <nav id="menu-mobile" className={s.menuMobile}>
          <a href="/" onClick={() => toggleMenu()}>Home</a>
          <a href="#sectionTwo" onClick={() => toggleMenu()}>What is Kutai</a>
          <a href="#sectionFour" onClick={() => toggleMenu()}>Nutritional Evaluation</a>
          <a href="#sectionFive" onClick={() => toggleMenu()}>Technology </a>
          <a href="#sectionSix" onClick={() => toggleMenu()}>Contact Us</a>
        <Image src={logo} alt="logo" />
      </nav>
    </div>
  );
};

export default NavMenu;
