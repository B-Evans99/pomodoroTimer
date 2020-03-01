import React from "react";
import {
  faPlay,
  faPause,
  faBackward,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SettingController({
  start,
  pauseTimer,
  setTime,
  setShow,
  show,
  setRestTime,
  restTime,
  setWorkTime,
  workTime,
  setLongRestTime,
  longRestTime,
  timerInterval,
  reset
}) {
  return (
    <div className="sessionController">
      <div className="iconBar">
        <FontAwesomeIcon
          icon={timerInterval == -1 ? faPlay : faPause}
          size="lg"
          onClick={timerInterval == -1 ? start : pauseTimer}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faBackward}
          size="lg"
          onClick={reset}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={show ? faEye : faEyeSlash}
          size="lg"
          onClick={() => {
            setShow(show => {
              return !show;
            });
          }}
        ></FontAwesomeIcon>
      </div>
      <div className="sessionControlBox">
        <div className="sessionBox">
          <h3>Work Session</h3>
          <input
            type="text"
            value={workTime / 60}
            onChange={e => {
              let newVal = parseInt("0" + e.target.value);
              setWorkTime(newVal * 60);
            }}
          ></input>
        </div>
        <div className="sessionBox">
          <h3>Rest Session</h3>
          <input
            type="text"
            value={restTime / 60}
            onChange={e => {
              let newVal = parseInt("0" + e.target.value);
              setRestTime(newVal * 60);
            }}
          ></input>
        </div>
        <div className="sessionBox">
          <h3>Long Rest Session</h3>
          <input
            type="text"
            value={longRestTime / 60}
            onChange={e => {
              let newVal = parseInt("0" + e.target.value);
              setLongRestTime(newVal * 60);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
