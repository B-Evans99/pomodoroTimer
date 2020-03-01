import React from "react";
import {
  faPlay,
  faPause,
  faBackward,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TimerControls({
  start,
  pauseTimer,
  setShow,
  show,
  timerInterval,
  reset
}) {
  return (
    <div className="iconBar">
      <FontAwesomeIcon
        icon={faBackward}
        size="lg"
        onClick={reset}
        title="Reset Timer"
      ></FontAwesomeIcon>

      <FontAwesomeIcon
        icon={timerInterval == -1 ? faPlay : faPause}
        size="2x"
        onClick={timerInterval == -1 ? start : pauseTimer}
        title={timerInterval == -1 ? "Start Timer" : "Pause Timer"}
      ></FontAwesomeIcon>

      <FontAwesomeIcon
        icon={show ? faEye : faEyeSlash}
        size="lg"
        onClick={() => {
          setShow(show => {
            return !show;
          });
        }}
        title={show ? "Hide Countdown" : "Show Countdown"}
      ></FontAwesomeIcon>
    </div>
  );
}
