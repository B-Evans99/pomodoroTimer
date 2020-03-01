import React, { useState } from "react";
import Sound from "react-sound";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.js";
import Timer from "./components/Timer.js";
import SettingController from "./components/SettingController.js";
import beep from "./beep.mp3";

function App() {
  let [workTime, setWorkTime] = useState(1500);
  let [restTime, setRestTime] = useState(300);
  let [longRestTime, setLongRestTime] = useState(600);
  let [time, setTime] = useState(0);
  let [timerInterval, setTimerInterval] = useState(-1);
  let [show, setShow] = useState(true);
  let [session, setSession] = useState("work");
  let [sessionCount, setSessionCount] = useState(0);

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
    setSessionCount(count => {
      setTime(() => {
        if (session == "work") {
          if ((count + 1) % 8 == 0) {
            setSession("longrest");
            return longRestTime;
          } else {
            setSession("rest");
            return restTime;
          }
        } else {
          setSession("work");
          return workTime;
        }
      });
      return count + 1;
    });
  };

  let tick = () => {
    setTime(time => {
      if (
        (session == "work" && time >= workTime) ||
        (session == "rest" && time >= restTime) ||
        (session == "longrest" && time >= longRestTime)
      ) {
        pauseTimer();
        return 0;
      } else {
        return time + 1;
      }
    });
  };

  let start = () => {
    clearInterval(timerInterval);
    setTimerInterval(setInterval(tick, 1000));
  };

  return (
    <div className="App">
      <h2>{session} session</h2>
      <Sound
        url={beep}
        playStatus={
          (session == "work" && time >= workTime) ||
          (session == "rest" && time >= restTime) ||
          (session == "longrest" && time >= longRestTime)
            ? Sound.status.PLAYING
            : Sound.status.PAUSE
        }
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
      <SettingController
        start={start}
        pauseTimer={pauseTimer}
        setTime={setTime}
        setShow={setShow}
        setRestTime={setRestTime}
        setWorkTime={setWorkTime}
        setLongRestTime={setLongRestTime}
        workTime={workTime}
        restTime={restTime}
        longRestTime={longRestTime}
        show={show}
        timerInterval={timerInterval}
        reset={reset}
      ></SettingController>
    </div>
  );
}

export default App;
