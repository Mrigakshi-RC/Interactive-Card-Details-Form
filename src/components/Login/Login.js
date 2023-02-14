import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [nameisValid, setNameIsValid] = useState();

  const [enteredCard, setEnteredCard] = useState("");
  const [cardIdValid, setCardIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const nameChangeHandler = (event) => {
    setenteredName(event.target.value);
    setFormIsValid(
      /^[a-zA-Z ]*$/.test(event.target.value) && /^[0-9 ]*$/.test(enteredCard)
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredCard(event.target.value);

    setFormIsValid(
      /^[0-9 ]*$/.test(event.target.value) && /^[a-zA-Z ]*$/.test(enteredName)
    );
  };

  const validateEmailHandler = () => {
    setNameIsValid(/^[a-zA-Z ]*$/.test(enteredName) );
  };

  const validatePasswordHandler = () => {
    setCardIsValid(/^[0-9 ]*$/.test(enteredCard));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredName, enteredCard);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            nameisValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={validateEmailHandler}
          />
          <div id="ename" className={classes.emsg}></div>
        </div>
        <div
          className={`${classes.control} ${
            cardIdValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="cardNo">CARD NUMBER</label>
          <input
            type="text"
            id="cardNo"
            value={enteredCard}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <div id="ecard" className={classes.emsg}></div>
        </div>
        <div className={classes.holder}>
          <div
            className={`${classes.control} ${
              cardIdValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
            <div className={classes.subHolder}>
              <input
                type="number"
                className={classes.holder1}
                id="expDate"
                value={enteredCard}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
              <input
                type="number"
                className={classes.holder2}
                id="expDate"
                value={enteredCard}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div id="eexp" className={classes.emsg}></div>
          </div>
          <div
            className={`${classes.control} ${
              cardIdValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              className={classes.holder3}
              id="cvc"
              value={enteredCard}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <div id="ecvc" className={classes.emsg}></div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Confirm
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
