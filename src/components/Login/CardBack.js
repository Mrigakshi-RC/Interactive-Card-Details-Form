import { React } from "react";

import classes from "./CardBack.module.css";

const CardBack = (props) => {
  return (
    <div className={props.login===false?classes.container:classes.logIn}>
      <p className={classes.cvc}>
        {props.text5.length === 0 ? "000" : props.text5}
      </p>
    </div>
  );
};

export default CardBack;
