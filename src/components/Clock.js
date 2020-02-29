import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Clock({ sessionLength, time, filling }) {
  let percentage = ((sessionLength - time) / sessionLength) * 100;

  return (
    <div className="clock">
      <CircularProgressbar
        value={percentage}
        text={""}
        styles={
          time == sessionLength
            ? buildStyles({
                strokeLinecap: "butt",
                pathColor: filling ? "#f0f" : "#0f0",
                trailColor: filling ? "#0f0" : "#f0f",
                pathTransition: "none"
              })
            : buildStyles({
                strokeLinecap: "butt",
                pathColor: filling ? "#f0f" : "#0f0",
                trailColor: filling ? "#0f0" : "#f0f"
              })
        }
      />
    </div>
  );
}
