import React from "react";
import classes from "./BannerAnimation.module.scss";
const BannerAnimation = () => {
  return (
    <div className={classes.banner_animation}>
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
      
    </div>
  );
};

export default BannerAnimation;
