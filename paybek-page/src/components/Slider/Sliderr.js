import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ufone from "../../assets/images/ufone.png";
import classes from  "./Sliderr.module.scss"

const Sliderr = () => {
  const  settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 2,
  };
  return (
    <div className={classes.slide_wrapper}> 
    <Slider {...settings}>
        <div>
        <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
        <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
        <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
        <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
        <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
        <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
          <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
          <div >
          <img src={ufone} alt="" className={classes.slider_img}/>
        </div>
      </Slider>
     </div> 
  );
};

export default Sliderr;
