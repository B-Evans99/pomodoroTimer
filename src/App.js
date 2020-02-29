import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.js";
import Timer from "./components/Timer.js";
import SettingController from "./components/SettingController.js";

function App() {
  let [workTime, setWorkTime] = useState(7);
  let [restTime, setRestTime] = useState(2);
  let [time, setTime] = useState(workTime);
  let [timerInterval, setTimerInterval] = useState(-1);
  let [show, setShow] = useState(true);
  let [session, setSession] = useState("work");

  let pauseTimer = () => {
    setTimerInterval(interval => {
      clearInterval(interval);
      return -1;
    });
  };

  let tick = () => {
    setTime(time => {
      if (time == 0) {
        pauseTimer();
        if (session == "work") {
          setSession("rest");
          return restTime;
        } else {
          setSession("work");
          return workTime;
        }
      } else {
        return time - 1;
      }
    });
  };

  let start = () => {
    clearInterval(timerInterval);
    setTimerInterval(setInterval(tick, 1000));
  };

  return (
    <div className="App">
      <Clock
        sessionLength={session == "work" ? workTime : restTime}
        time={time}
        filling={session == "work"}
      ></Clock>
      <Timer time={time} show={show}></Timer>
      <SettingController></SettingController>
      <input type="button" onClick={start} value="Start"></input>
      <input type="button" onClick={pauseTimer} value="Stop"></input>
      <input
        type="button"
        value="Reset"
        onClick={() => {
          setTime(500);
        }}
      ></input>
      <input
        type="button"
        value="show/hide timer"
        onClick={() => {
          setShow(show => {
            return !show;
          });
        }}
      ></input>
    </div>
  );
}

export default App;
