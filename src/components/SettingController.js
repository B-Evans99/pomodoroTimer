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
  timerInterval
}) {
  return (
    <div className="sessionController">
      <div className="iconBar">
        <FontAwesomeIcon
          icon={faPlay}
          size="lg"
          onClick={start}
          style={timerInterval == -1 ? { color: "#0f0" } : {}}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faPause}
          size="lg"
          onClick={pauseTimer}
          style={timerInterval != -1 ? { color: "#0f0" } : {}}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faBackward}
          size="lg"
          onClick={() => {
            setTime(500);
          }}
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
              let newVal = parseInt(e.target.value);
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
              let newVal = parseInt(e.target.value);
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
              let newVal = parseInt(e.target.value);
              setLongRestTime(newVal * 60);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
