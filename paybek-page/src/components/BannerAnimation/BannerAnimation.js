import {React,useRef} from "react";
import classes from "./BannerAnimation.module.scss";
import phone3 from "../../assets/images/phone3.png";
import phone4 from "../../assets/images/phone4.png";

const BannerAnimation = () => {
const zoomElement = document.querySelector(".left_img_wrap");
let zoom = 1;
const ZOOM_SPEED = 0.1;
const ourRef = useRef(null)
document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    }else{    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});
  return (
    <div className={classes.banner_animation} >
      <div className={classes.left_img_wrap} ref={ourRef}>
        <img src={phone3} alt="" className={classes.left_img} />
      </div>

      <div className={classes.banner_top}>
        <div className={classes.centered_txt}>
          <p className={classes.black_txt}>
            The fastest way to send top-up worldwide
          </p>

          <p className={classes.grey_txt}>
            We deliver mobile Top-Up to millions worldwide.
          </p>

          <button className={classes.download_btn}>Download Now</button>
        </div>
      </div>

      <div className={classes.right_img_wrap}>
        <img src={phone4} alt="" className={classes.right_img} />
      </div>
    </div>
  );
};

export default BannerAnimation;
