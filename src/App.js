import React from "react";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Time from "./components/timer/Time";

function App() {
  return (
    <div className={classes.app} >
      <Header/>
      <Time/>
      
    </div>
  );
}

export default App;
