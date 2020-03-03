import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
  let [localWork, setLocalWork] = useState(workTime);
  let [localRest, setLocalRest] = useState(restTime);
  let [localLongRest, setLocalLongRest] = useState(longRestTime);

  //update the URL with query terms that are never used, haha
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

  //update the length of time for any variable
  let updateTime = (controlFunction, updateNewVal) => {
    updateNewVal(newVal => {
      //some broad control on how long a timer can be with a minimum of 1 minute and a max of 9999
      newVal = newVal >= 60 ? newVal : 60;
      newVal = newVal <= 599940 ? newVal : 599940;
      controlFunction(newVal);
      return newVal;
    });
  };

  return (
    <div className="sessionControlBox">
      <div className="sessionBox">
        <h3>Work Session</h3>{" "}
        <div className="inputBox">
          <input
            type="text"
            value={localWork / 60}
            onChange={e => {
              //add a 0 to the input incase its empty to avoid NaN
              let newVal = parseInt("0" + e.target.value);
              setLocalWork(newVal * 60);
            }}
            onKeyDown={e => {
              //if "enter"
              if (e.keyCode == 13) {
                updateTime(setWorkTime, setLocalWork);
              }
            }}
            onBlur={() => {
              //if the focus moves, update
              updateTime(setWorkTime, setLocalWork);
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
            value={localRest / 60}
            onChange={e => {
              let newVal = parseInt("0" + e.target.value);
              setLocalRest(newVal * 60);
            }}
            onKeyDown={e => {
              if (e.keyCode == 13) {
                updateTime(setRestTime, setLocalRest);
              }
            }}
            onBlur={() => {
              updateTime(setRestTime, setLocalRest);
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
              value={localLongRest / 60}
              onChange={e => {
                let newVal = parseInt("0" + e.target.value);
                setLocalLongRest(newVal * 60);
              }}
              onKeyDown={e => {
                if (e.keyCode == 13) {
                  updateTime(setLongRestTime, setLocalLongRest);
                }
              }}
              onBlur={() => {
                updateTime(setLongRestTime, setLocalLongRest);
              }}
            ></input>
            <span>min</span>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                setLongRestEnabled(false);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
      ) : (
        <div className="sessionBox">
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => setLongRestEnabled(true)}
          >
            Enable Long Rest
          </h3>
        </div>
      )}
    </div>
  );
}
