import React from "react";

export default function SettingController({
  start,
  pauseTimer,
  setTime,
  setShow
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
    </div>
  );
}
