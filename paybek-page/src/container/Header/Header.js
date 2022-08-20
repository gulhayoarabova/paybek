import React from "react";
import classes from "./Header.module.scss";
import paybekLogo from "../../assets/images/2-01.png";
import down from "../../assets/images/Vector 1.png";

const Header = () => {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header_container}>
        <div className={classes.logo_section}>
          <img src={paybekLogo} alt="logo" />
        </div>
        <div className={classes.header_items}>
          <a href="./home">Top up</a>
          <a href="./home">Contact</a>
          <button>Get the app</button>
          <div className={classes.language_switcher}>
            <span>En</span>
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
