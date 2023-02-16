import React from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Card className={classes.home}>
      <div className={classes.complete}></div>
      <h1 className={classes.thankYou}>THANK YOU!</h1>
      <p className={classes.added}>We have added your card details</p>
      <Button className={classes.buttonComplete}>Continue</Button>
    </Card>
  );
};

export default Home;
