import React from "react";
import styled from './Header.module.css';
const Header = () => {
  return (
    <header className={styled.header}>
      <img
        className="logo"
        src="https://cdn0.iconfinder.com/data/icons/buntu-mobile/100/gps_glyph_convert-512.png"
        alt=""
      />
    </header>
  );
};

export default Header;
