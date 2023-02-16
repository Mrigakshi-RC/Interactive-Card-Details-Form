import { React } from "react";

import classes from "./CardFront.module.css";

const CardFront = (props) => {
  return (
    <div className={props.login === false ? classes.container : classes.logIn}>
      <p className={classes.dotsHolder}>
        <span className={classes.bigDot}></span>
        <span className={classes.smallDot}></span>
      </p>
      <h1 className={classes.topText}>
        {props.text1.length === 0 ? "0000 0000 0000 0000" : props.text1}
      </h1>
      <div className={classes.holder}>
        <p className={classes.subText}>
          {props.text2.length === 0 ? "PRIYA ROY" : props.text2}
        </p>
        <p className={classes.subText}>
          {props.text3.length === 0
            ? "00"
            : props.text3.length === 1
            ? "0" + props.text3
            : props.text3}
          /
          {props.text4.length === 0
            ? "00"
            : props.text4.length === 1
            ? "0" + props.text4
            : props.text4}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
