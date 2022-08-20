import React from "react";
import classes from "./HomePage.module.scss";
import BannerAnimation from "../components/BannerAnimation/BannerAnimation";
import Header from "../container/Header/Header";
import Card from "../components/Cards/Card";
import Essantials from "../components/Essantials/Essantials";
import phone from "../assets/images/phone.png";
import phone2 from "../assets/images/phone2.png";
import Footer from "../container/Footer/Footer";

const HomePage = () => {
  return (
    <div className={classes.homepage_wrapper}>
      <Header />
      <BannerAnimation />
      {/* **** Everyday essantials (first) **** */}
      <div className={classes.essentials_first}>
        <div className={classes.container}>
          <Essantials />
          <div className={classes.img_txt}>
            <p className={classes.wht_lrg}>Top Up Family</p>
            <p className={classes.xsml_txt}>
              We provide best rates for your Top-Up
            </p>
          </div>
          <Card />
        </div>
      </div>
      {/* **** Everyday essantials (second) **** */}
      <div className={classes.essentials_second}>
        <Essantials />
        {/* left side img part */}
        <div className={classes.img_parts_wrapper}>
          <div className={classes.left_side_img}>
            <div className={classes.txt_wrap}>
              <ul>
                <li>Home </li>
                <li>• Top Up</li>
              </ul>
              <p className={classes.left_txt}>
                Top-up Mobiles at your fingertip
              </p>
            </div>
            <img src={phone} alt="" className={classes.left_img} />
          </div>

          {/* right side img part */}
          <div className={classes.right_side_img}>
            <img src={phone2} alt="" className={classes.right_img} />
            <div className={classes.txt_wrap_right}>
              <ul>
                <li>Home </li>
                <li>• Top Up</li>
              </ul>
              <p className={classes.right_txt}>
                Use your Phonebook to recharge your contacts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slider section */}
      <div className={classes.slider_section}>
        <div className={classes.txt_wrap}>
          <ul>
            <li>Home </li>
            <li>• Top Up</li>
          </ul>
          <p className={classes.left_txt}>Top-up Mobiles at your fingertip</p>
        </div>
        <div className={classes.wrap}>
          <div className={classes.slider}>
            <p className={classes.hundred_country}>Over 100+ Top up country</p>

          </div>
        </div>
      </div>

      {/* get app section */}
      <div className={classes.getApp}>
        <p className={classes.txt1}>What still are you waiting for?</p>
        <p className={classes.txt2}>Get the only financial super app</p>
        <button className={classes.getApp_btn}>Try Paybek now</button>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
