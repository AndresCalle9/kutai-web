import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./Header.module.scss";
import logo from "../../../public/logo512.png";
import Image from "next/image";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    const menuMobile = document.getElementById("menu-mobile");
    if (!toggleMenu) {
      menuMobile.classList.remove("closeMenuAnimation");
      menuMobile.classList.add("openMenuAnimation");
    } else {
      menuMobile.classList.remove("openMenuAnimation");
      menuMobile.classList.add("closeMenuAnimation");
    }
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <div>
          <p>EN</p>
        </div>
        <div>
          <Image src={logo} alt="logo kutai" href="/"/>
        </div>
        <div onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
          <NavMenu toggleMenu={() => openMenu()} />
        </div>
      </div>
    </header>
  );
};

export default Header;
