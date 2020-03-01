import React from "react";

export default function SettingController({
  start,
  pauseTimer,
  setTime,
  setShow,
  setRestTime,
  restTime,
  setWorkTime,
  workTime,
  setLongRestTime,
  longRestTime
}) {
  return (
    <div className="sessionController">
      <input type="button" onClick={start} value="Start"></input>
      <input type="button" onClick={pauseTimer} value="Stop"></input>
      <input
        type="button"
        value="Reset"
        onClick={() => {
          setTime(500);
        }}
      ></input>
      <input
        type="button"
        value="show/hide timer"
        onClick={() => {
          setShow(show => {
            return !show;
          });
        }}
      ></input>
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
