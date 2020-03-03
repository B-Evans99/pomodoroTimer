import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.js";
import Timer from "./components/Timer.js";
import SessionControls from "./components/SessionControls.js";
import beep from "./beep.mp3";
import TimerControls from "./components/TimerControls";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  //how long each of the sessions should be in seconds
  let [workTime, setWorkTime] = useState(1500);
  let [restTime, setRestTime] = useState(300);
  let [longRestTime, setLongRestTime] = useState(600);

  //the current time that has passed on the timer. it ticks "up", not down, in state, so that when users can incrase/decrease the length of a session after the timer has started
  let [time, setTime] = useState(0);

  //for managing setInterval
  let [timerInterval, setTimerInterval] = useState(-1);

  //control variable for the countdown visibility
  let [show, setShow] = useState(true);

  //possible values: "work", "rest", "longrest"
  let [session, setSession] = useState("work");

  //for counting sessions to see if it's a longrest
  let [sessionCount, setSessionCount] = useState(0);

  //control variable for long rest
  let [longRestEnabled, setLongRestEnabled] = useState(false);

  //I've left my functions inside the component due to the time constraint, but usually I pop them out for faster load times when I'm done a project/optimizing.
  let pauseTimer = () => {
    setTimerInterval(interval => {
      clearInterval(interval);
      return -1;
    });
  };

  let reset = () => {
    setTime(0);
  };

  //we will run changeSession after the timer has gone off
  let changeSession = () => {
    //pausing the timer kills the interval right away so the timer doesn't continue ticking
    pauseTimer();

    //reset the timer to 0 since the session is over
    setTime(0);

    //increase the session count by 1, but also...
    setSessionCount(count => {
      //...change the incoming session based upon the new value
      if (session == "work") {
        if (longRestEnabled && (count + 2) % 8 == 0) {
          setSession("longrest");
        } else {
          setSession("rest");
        }
      } else {
        setSession("work");
      }
      return count + 1;
    });
  };

  //increase the timer by 1 every second
  let tick = () => {
    setTime(time => {
      return time + 1;
    });
  };

  //start a new timer
  let start = () => {
    //make sure there is no timer currently active
    clearInterval(timerInterval);
    //restart it
    setTimerInterval(setInterval(tick, 1000));
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/*the title colour is different depending on what session it is*/}
        <h2
          className={
            session == "work"
              ? "workTitle"
              : session == "rest"
              ? "restTitle"
              : "longRestTitle"
          }
        >
          {session.slice(0, 1).toUpperCase() + session.slice(1, session.length)}{" "}
          Session
        </h2>
        {/*the sound element for controlling the buzzer fires when the timer has met the session length and triggers changeSession on completion*/}
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
        {/*The clock function needs how long the session will be to calculate the percentage, the time that has passed, and whether it should be waxing or waning */}
        <Clock
          sessionLength={
            session == "work"
              ? workTime
              : session == "rest"
              ? restTime
              : longRestTime
          }
          time={time}
          filling={session == "work"}
        ></Clock>
        {/* the timer, or countdown, needs the current time passed, the goal (overall session length), and whether its visible, and the function to change visibility */}
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
        {/* The controllers take in variables and the functions to change them. */}
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
          <p>
            The Pomodoro Technique breaks time into sessions of work and rest to
            help with productivity, quality of work, and focus.
          </p>
          <p>
            To use the timer, enter how long you would like your sessions to be.
            If you would like to have a longer break every 4 work sessions,
            enable long rest. Then hit the play button to start the first work
            session.
          </p>
          <p>
            When the timer beeps, hit the play button again to start the next
            session.
          </p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
