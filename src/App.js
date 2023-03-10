import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import CardFront from "./components/Login/CardFront";
import CardBack from "./components/Login/CardBack";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  const trigger1 = (value) => {
    setText1(value);
  };
  const trigger2 = (value) => {
    setText2(value);
  };
  const trigger3 = (value) => {
    setText3(value);
  };
  const trigger4 = (value) => {
    setText4(value);
  };
  const trigger5 = (value) => {
    setText5(value);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!isLoggedIn && (
          <Login
            onLogin={loginHandler}
            trigger1={trigger1}
            trigger2={trigger2}
            trigger3={trigger3}
            trigger4={trigger4}
            trigger5={trigger5}
          />
        )}
        <CardFront
          text1={text1}
          text2={text2}
          text3={text3}
          text4={text4}
          login={isLoggedIn}
        />

        <CardBack text5={text5} login={isLoggedIn} />

        {isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
