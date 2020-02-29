import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.js";
import Timer from "./components/Timer.js";
import SettingController from "./components/SettingController.js";

function App() {
  let [time, setTime] = useState(500);
  let [timerInterval, setTimerInterval] = useState(-1);

  let tick = () => {
    console.log("tick");
    setTime(time => {
      return time - 1;
    });
  };

  let start = () => {
    clearInterval(timerInterval);
    setTimerInterval(setInterval(tick, 1000));
  };

  return (
    <div className="App">
      <Clock></Clock>
      <Timer time={time}></Timer>
      <SettingController></SettingController>
      <input type="button" onClick={start} value="Start"></input>
      <input
        type="button"
        onClick={() => {
          clearInterval(timerInterval);
        }}
        value="Stop"
      ></input>
      <input
        type="button"
        value="Reset"
        onClick={() => {
          setTime(500);
        }}
      ></input>
    </div>
  );
}

export default App;
