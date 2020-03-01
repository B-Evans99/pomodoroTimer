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
  longRestTime
}) {
  return (
    <div className="sessionController">
      <FontAwesomeIcon
        icon={faPlay}
        size="lg"
        onClick={start}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faPause}
        size="lg"
        onClick={pauseTimer}
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
      <input
        type="text"
        value={workTime}
        onChange={e => {
          let newVal = parseInt(e.target.value);
          setWorkTime(newVal);
        }}
      ></input>
      <input
        type="text"
        value={restTime}
        onChange={e => {
          let newVal = parseInt(e.target.value);
          setRestTime(newVal);
        }}
      ></input>
      <input
        type="text"
        value={longRestTime}
        onChange={e => {
          let newVal = parseInt(e.target.value);
          setLongRestTime(newVal);
        }}
      ></input>
    </div>
  );
}
