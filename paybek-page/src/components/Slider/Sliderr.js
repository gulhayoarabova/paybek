import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ufone from "../../assets/images/ufone.png";
import classes from  "./Sliderr.module.scss"

const Sliderr = () => {
  var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
  };
  return (
    <Slider {...settings}>
      <div className={classes.slide_wrapper}>
        <div>
        <img src={ufone} alt="" />
        </div>
        <div >
          <img src={ufone} alt="" />
        </div>
        <div >
          <img src={ufone} alt="" />
        </div>
        <div >
          <img src={ufone} alt="" />
        </div>
        <div >
          <img src={ufone} alt="" />
        </div>
        <div >
          <img src={ufone} alt="" />
        </div>
      </div>
      </Slider>
  );
};

export default Sliderr;
