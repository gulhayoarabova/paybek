import React from 'react'
import classes from "./Essantials.module.scss"
const Essantials = () => {
  return (
   <div className={classes.txt_wrap}>
            <p className={classes.sm_txt}>Everyday essentials</p>
            <p className={classes.lrg_txt}>Send less get More</p>
            <p className={classes.xsml_txt}>
              We provide best rates for your Top-Up
            </p>
          </div>
  )
}

export default Essantials