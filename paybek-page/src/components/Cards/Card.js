import React from "react";
import classes from "./Card.module.scss";
import visa from "../../assets/images/visa.png";
import amexpress from "../../assets/images/amexpress.png";
import club from "../../assets/images/club.png";
import discover from "../../assets/images/discover.png";
import unionpay from "../../assets/images/unionpay.png";
import jcb from "../../assets/images/jcb.png";
import debitcard from "../../assets/images/Debit Card.png";
import user from "../../assets/images/user.png";
const Card = () => {
    return (
        <div className={classes.card_wrapper}>
            {/* ****** card 1 ****** */}
            <div className={classes.card_one}>
                <p className={classes.card_title}>Pay with multiple cards</p>
                <div className={classes.visa_wrapper}>
                    <img src={visa} alt="" />
                    <img src={discover} alt="" />
                    <img src={club} alt="" />
                    <img src={unionpay} alt="" />
                    <img src={jcb} alt="" />
                    <img src={amexpress} alt="" />
                </div>
                <img src={debitcard} alt="" className={classes.debit_card} />
            </div>

            {/* ******* card 2 ******* */}
            <div className={classes.card_two}>
                <p className={classes.card2_title}>Get $5 for every invited friend</p>

                <img src={user} alt="" className={classes.user} />
            </div>
        </div>
    );
};

export default Card;
