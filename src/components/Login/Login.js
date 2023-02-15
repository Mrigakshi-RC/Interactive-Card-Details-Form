import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const numbersError = "Wrong format, numbers only";
  const lettersError = "Wrong format, alphabets only";
  const blankError = "Can't be blank";
  const invalidError = "Invalid value, try again";

  const [flag, setFlag] = useState(0);

  const [enteredName, setenteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState();

  const [enteredCard, setEnteredCard] = useState("");
  const [cardIsValid, setCardIsValid] = useState();

  const [enteredMonth, setEnteredMonth] = useState("");
  const [monthIsValid, setMonthIsValid] = useState();

  const [enteredYear, setEnteredYear] = useState("");
  const [yearIsValid, setYearIsValid] = useState();

  const [enteredCVC, setEnteredCVC] = useState("");
  const [CVCIsValid, setCVCIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const parameters=[nameIsValid,cardIsValid,monthIsValid,yearIsValid,CVCIsValid];
  const values=[enteredName,enteredCard,enteredMonth,enteredYear,enteredCVC];

  const checkEmpty = (arr, message) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 0) {
        return blankError;
      }
    }
    return message;
  };

  const goodToGo = (value) => {
    let count=0;
    for (let i=0; i<parameters.length; i++){
      if (parameters[i] && values[i].length!==0){
        count+=1;
      }
    }
    return count>=4;
  }

  const nameChangeHandler = (event) => {
    setenteredName(event.target.value);
    setFormIsValid(
      event.target.value.length!==0 && /^[a-zA-Z ]*$/.test(event.target.value) && goodToGo(nameIsValid)
    );
    props.trigger2(event.target.value);
  };

  const cardChangeHandler = (event) => {
    if (flag===0 && event.target.value.trim().length%4===0){
      event.target.value+=" ";
      setFlag(1);
    }
    else if (flag===1 && event.target.value.trim().length%5===4){
      event.target.value+=" ";
    }

    setEnteredCard(event.target.value);
    setFormIsValid(
      event.target.value.length!==0 && /^[0-9 ]*$/.test(event.target.value) && goodToGo(cardIsValid)
    );
    props.trigger1(event.target.value);
  };

  const monthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
    setFormIsValid(
      event.target.value.length!==0 && 0 < Number(event.target.value) &&
        Number(event.target.value) <= 31 &&
        goodToGo(monthIsValid)
    );
    props.trigger3(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
    setFormIsValid(
      event.target.value.length!==0 && /^[0-9 ]*$/.test(event.target.value) && goodToGo(yearIsValid)
    );
    props.trigger4(event.target.value);
  };

  const CVCChangeHandler = (event) => {
    setEnteredCVC(event.target.value);
    setFormIsValid(
      event.target.value.length!==0 && /^[0-9 ]*$/.test(event.target.value) && goodToGo(CVCIsValid)
    );
    props.trigger5(event.target.value);
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.length!==0 && /^[a-zA-Z ]*$/.test(enteredName));
  };

  const validateCardHandler = () => {
    setCardIsValid(enteredCard.length!==0 && /^[0-9 ]*$/.test(enteredCard));
  };

  const validateMonthHandler = () => {
    setMonthIsValid(enteredMonth.length!==0 && 0 < Number(enteredMonth) && Number(enteredMonth) <= 12
    );
  };

  const validateYearHandler = () => {
    setYearIsValid(enteredYear.length!==0 && /^[0-9 ]*$/.test(enteredYear));
  };

  const validateCVCHandler = () => {
    setCVCIsValid(enteredCVC.length!==0 && /^[0-9 ]*$/.test(enteredCVC));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredName, enteredCard);
    // in a similar way, pass the values in changeHandlers to some prop function received from card display component
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* cardholder name */}
        <div
          className={`${classes.control} ${
            nameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
          <div
            id="ename"
            className={`${classes.emsg} ${
              nameIsValid === false ? classes.invalidMsg : ""
            }`}
          >
            <p>{checkEmpty([enteredCard], lettersError)}</p>
          </div>
        </div>

        {/* card number */}
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
            onChange={cardChangeHandler}
            onBlur={validateCardHandler}
          />
          <div
            id="ecard"
            className={`${classes.emsg} ${
              cardIsValid === false ? classes.invalidMsg : ""
            }`}
          >
            <p>{checkEmpty([enteredCard], numbersError)}</p>
          </div>
        </div>

        {/* expiry date */}
        <div className={classes.holder}>
          <div
            className={`${classes.control} ${
              monthIsValid === false || yearIsValid === false
                ? classes.invalid
                : ""
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
            <div
              id="eexp"
              className={`${classes.emsg} ${
                monthIsValid === false || yearIsValid === false
                  ? classes.invalidMsg
                  : ""
              }`}
            >
              <p>{checkEmpty([enteredMonth,enteredYear], invalidError)}</p>
            </div>
          </div>

          {/* CVC */}
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
            <div
              id="ecvc"
              className={`${classes.emsg} ${
                CVCIsValid===false ? classes.invalidMsg : ""
              }`}
            >
              <p>{checkEmpty([enteredCVC], numbersError)}</p>
            </div>
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
