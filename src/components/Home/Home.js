import React from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>THANK YOU!</h1>
      <p>We have added your card details</p>
      <Button>Continue</Button>
    </Card>
  );
};

export default Home;
