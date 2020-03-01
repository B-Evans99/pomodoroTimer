import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Clock({ sessionLength, time, filling }) {
  let percentage = (time / sessionLength) * 100;
  let stroke = "#1966a9";
  let trail = "#2d3";

  return (
    <div className="clock">
      <CircularProgressbar
        value={percentage}
        text={""}
        styles={
          time == sessionLength
            ? buildStyles({
                strokeLinecap: "butt",
                pathColor: filling ? trail : stroke,
                trailColor: filling ? stroke : trail,
                pathTransition: "none"
              })
            : buildStyles({
                strokeLinecap: "butt",
                pathColor: filling ? trail : stroke,
                trailColor: filling ? stroke : trail,
                pathTransition: "stroke-dashoffset 1s linear 0s"
              })
        }
      />
    </div>
  );
}
