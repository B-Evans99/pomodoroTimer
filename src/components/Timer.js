import React from "react";

export default function Timer({ time, show, setShow, goal }) {
  time = goal - time > 0 ? goal - time : 0;

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = (time - hours * 3600 - minutes * 60) % 60;

  return (
    <div className="timerBox">
      {show ? (
        <h1>
          {hours.toString().padStart(2, "0") +
            ":" +
            minutes.toString().padStart(2, "0") +
            ":" +
            seconds.toString().padStart(2, "0")}
        </h1>
      ) : (
        <h1
          className="hiddenTimer"
          onClick={() => {
            setShow(true);
          }}
        >
          show timer
        </h1>
      )}
    </div>
  );
}
