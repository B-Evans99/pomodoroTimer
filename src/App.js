import React, { useState } from "react";
import Sound from "react-sound";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.js";
import Timer from "./components/Timer.js";
import SessionControls from "./components/SessionControls.js";
import beep from "./beep.mp3";
import TimerControls from "./components/TimerControls";

function App() {
  let [workTime, setWorkTime] = useState(1500);
  let [restTime, setRestTime] = useState(300);
  let [longRestTime, setLongRestTime] = useState(600);
  let [time, setTime] = useState(0);
  let [timerInterval, setTimerInterval] = useState(-1);
  let [show, setShow] = useState(true);
  let [session, setSession] = useState("work");
  let [sessionCount, setSessionCount] = useState(0);
  let [longRestEnabled, setLongRestEnabled] = useState(false);

  let pauseTimer = () => {
    setTimerInterval(interval => {
      clearInterval(interval);
      return -1;
    });
  };

  let reset = () => {
    setTime(0);
  };

  let changeSession = () => {
    pauseTimer();
    setTime(0);
    setSessionCount(count => {
      if (session == "work") {
        if (longRestEnabled && (count + 2) % 8 == 0) {
          setSession("longrest");
        } else {
          setSession("rest");
        }
      } else {
        setSession("work");
      }

      console.log(count);

      return count + 1;
    });
  };

  let tick = () => {
    setTime(time => {
      return time + 1;
    });
  };

  let start = () => {
    clearInterval(timerInterval);
    setTimerInterval(setInterval(tick, 1000));
  };

  return (
    <div className="App">
      <h2
        className={
          session == "work"
            ? "workTitle"
            : session == "rest"
            ? "restTitle"
            : "longRestTitle"
        }
      >
        {session} session
      </h2>
      <Sound
        url={beep}
        playStatus={
          (session == "work" && time >= workTime) ||
          (session == "rest" && time >= restTime) ||
          (session == "longrest" && time >= longRestTime)
            ? Sound.status.PLAYING
            : Sound.status.PAUSE
        }
        onPlaying={pauseTimer}
        onFinishedPlaying={changeSession}
      ></Sound>
      <Clock
        sessionLength={session == "work" ? workTime : restTime}
        time={time}
        filling={session == "work"}
      ></Clock>
      <Timer
        time={time}
        show={show}
        setShow={setShow}
        goal={
          session == "work"
            ? workTime
            : session == "rest"
            ? restTime
            : longRestTime
        }
      ></Timer>
      <div className="sessionController">
        <TimerControls
          start={start}
          pauseTimer={pauseTimer}
          setShow={setShow}
          show={show}
          timerInterval={timerInterval}
          reset={reset}
        ></TimerControls>
        <SessionControls
          setTime={setTime}
          setRestTime={setRestTime}
          setWorkTime={setWorkTime}
          setLongRestTime={setLongRestTime}
          workTime={workTime}
          restTime={restTime}
          longRestTime={longRestTime}
          longRestEnabled={longRestEnabled}
          setLongRestEnabled={setLongRestEnabled}
        ></SessionControls>
      </div>
    </div>
  );
}

export default App;
