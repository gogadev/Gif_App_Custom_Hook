import React from "react";

import image from "../../assets/image.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        G<span>i</span>F
      </h1>
      <img src={image} className="image" alt="" />
    </header>
  );
};

export default Header;
