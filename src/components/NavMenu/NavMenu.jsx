import React from "react";
import s from "./NavMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logoBlanco.png"

const NavMenu = ({ toggleMenu }) => {
  return (
    <div className={s.container}>
      <nav id="menu-mobile" className={s.menuMobile}>
        <Link href="/">
          <a href="/" onClick={() => toggleMenu()}>Home</a>
        </Link>
          <a href="#sectionTwo" onClick={() => toggleMenu()}>What is Kutai</a>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Nutritional Evaluation</a>
        </Link>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Technology </a>
        </Link>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Contact Us</a>
        </Link>
        <Image src={logo} alt="logo" />
      </nav>
    </div>
  );
};

export default NavMenu;
