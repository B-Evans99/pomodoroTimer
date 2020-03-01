import React from "react";
import {
  faPlay,
  faPause,
  faBackward,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SessionControls({
  setRestTime,
  restTime,
  setWorkTime,
  workTime,
  setLongRestTime,
  longRestTime,
  longRestEnabled,
  setLongRestEnabled
}) {
  return (
    <div className="sessionControlBox">
      <div className="sessionBox">
        <h3>Work Session</h3>{" "}
        <div className="inputBox">
          <input
            type="text"
            value={workTime / 60}
            onChange={e => {
              let newVal = parseInt("0" + e.target.value);
              setWorkTime(newVal * 60);
            }}
          ></input>
          <span>min</span>
        </div>
      </div>
      <div className="sessionBox">
        <h3>Rest Session</h3>
        <div className="inputBox">
          <input
            type="text"
            value={restTime / 60}
            onChange={e => {
              let newVal = parseInt("0" + e.target.value);
              setRestTime(newVal * 60);
            }}
          ></input>
          <span>min</span>
        </div>
      </div>

      {longRestEnabled ? (
        <div className="sessionBox">
          <h3>Long Rest Session</h3>{" "}
          <div className="inputBox">
            <input
              type="text"
              value={longRestTime / 60}
              onChange={e => {
                let newVal = parseInt("0" + e.target.value);
                setLongRestTime(newVal * 60);
              }}
            ></input>
            <span>min</span>
          </div>
        </div>
      ) : (
        <div className="sessionBox">
          <h3 onClick={() => setLongRestEnabled(true)}>Enable long rest</h3>
        </div>
      )}
    </div>
  );
}
