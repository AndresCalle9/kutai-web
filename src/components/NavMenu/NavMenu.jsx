import React from "react";
import s from "./NavMenu.module.scss";
import Link from "next/link";

const NavMenu = ({ toggleMenu }) => {
  return (
    <div className={s.container}>
      <nav id="menu-mobile" className={s.menuMobile}>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Home</a>
        </Link>
        <Link href="/">
          <a onClick={() => toggleMenu()}>What is Kutai</a>
        </Link>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Nutritional Evaluation</a>
        </Link>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Technology </a>
        </Link>
        <Link href="/">
          <a onClick={() => toggleMenu()}>Contact Us</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavMenu;
