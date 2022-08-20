import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/images/2-01.png";
const Footer = () => {
  return (
    <div className={classes.footer}>
    <div className={classes.footer_wrapper}>
      <div className={classes.one}>
        <img src={logo} alt="" />
        <p>
          Creating an app people feels close, by providing all financial
          services in native language for them, giving them chance to purchase
          for their families back in home , making people feel one step closer
          to their families by paying back their love and gratitude with PayBek.
        </p>
      </div>
      <div className={classes.two}>
        <p className={classes.title}>Legal</p>
        <p className={classes.sml_txt}>Terms & Conditions</p>
        <p className={classes.sml_txt}>Privacy Policy</p>
      </div>
      <div className={classes.three}>
        <p className={classes.title}>Follow</p>
        <p className={classes.sml_txt}>Instagram</p>
        
        <p className={classes.sml_txt}>Facebook</p>
        <p className={classes.sml_txt}>Linkedin</p>
      </div>
      <div className={classes.four}>
        <p className={classes.title}>Address</p>
        <p className={classes.sml_txt}> Location:228 Park Ave S, PMB 61877,New York, New York 10003-1502</p>
       
        <p className={classes.sml_txt}>Email: admin@paybek.io</p>
        <p className={classes.sml_txt}>Phone: +1(929) 822-7007</p>
      </div>
    </div>
      <p className={classes.copyright}>Copyright @2022 PayBek, inc. All rights reserved</p>
    </div>
  );
};

export default Footer;
