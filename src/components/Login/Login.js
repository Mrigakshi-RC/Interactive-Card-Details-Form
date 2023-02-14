import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [nameisValid, setNameIsValid] = useState();

  const [enteredCard, setEnteredCard] = useState("");
  const [cardIsValid, setCardIsValid] = useState();

  const [enteredMonth, setEnteredMonth] = useState("");
  const [monthIsValid, setMonthIsValid] = useState();

  const [enteredYear, setEnteredYear] = useState("");
  const [yearIsValid, setYearIsValid] = useState();

  const [enteredCVC, setEnteredCVC] = useState("");
  const [CVCIsValid, setCVCIsValid] = useState();

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

  const monthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
    setFormIsValid(
      0<Number(event.target.value) && Number(event.target.value)<=31 && /^[a-zA-Z ]*$/.test(enteredName)
    );
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
    setFormIsValid(
      /^[0-9 ]*$/.test(event.target.value) && /^[a-zA-Z ]*$/.test(enteredName)
    );
  };

  const CVCChangeHandler = (event) => {
    setEnteredCVC(event.target.value);
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

  const validateMonthHandler = () => {
    setMonthIsValid(0<Number(enteredMonth) && Number(enteredMonth)<=31);
  };

  const validateYearHandler = () => {
    setYearIsValid(/^[0-9 ]*$/.test(enteredYear));
  };

  const validateCVCHandler = () => {
    setCVCIsValid(/^[0-9 ]*$/.test(enteredCVC));
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
            cardIsValid === false ? classes.invalid : ""
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
              monthIsValid === false || yearIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
            <div className={classes.subHolder}>
              <input
                type="text"
                className={classes.holder1}
                id="expMonth"
                maxLength="2"
                value={enteredMonth}
                onChange={monthChangeHandler}
                onBlur={validateMonthHandler}
              />
              <input
                type="text"
                className={classes.holder2}
                id="expYear"
                maxLength="2"
                value={enteredYear}
                onChange={yearChangeHandler}
                onBlur={validateYearHandler}
              />
            </div>
            <div id="eexp" className={classes.emsg}></div>
          </div>
          <div
            className={`${classes.control} ${
              CVCIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              className={classes.holder3}
              id="cvc"
              value={enteredCVC}
              onChange={CVCChangeHandler}
              onBlur={validateCVCHandler}
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
