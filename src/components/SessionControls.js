import React, { useEffect } from "react";
import {
  faPlay,
  faPause,
  faBackward,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  useEffect(() => {
    history.push(
      "/session?work=" +
        workTime +
        "&rest=" +
        restTime +
        "&longrest=" +
        longRestTime
    );
  }, [workTime, restTime, longRestTime]);

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
              if (newVal == 0) newVal = 1;
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
              if (newVal == 0) newVal = 1;
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
                if (newVal == 0) newVal = 1;
                setLongRestTime(newVal * 60);
              }}
            ></input>
            <span>min</span>
          </div>
        </div>
      ) : (
        <div className="sessionBox">
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => setLongRestEnabled(true)}
          >
            Enable long rest
          </h3>
        </div>
      )}
    </div>
  );
}
