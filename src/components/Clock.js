import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Clock({ sessionLength, time, filling }) {
  let percentage = (time / sessionLength) * 100;

  //the use of the troke and trail flip depending on whether the clock is waxing/waning
  let stroke = "#253152";
  let trail = "#2d3";

  return (
    <div className="clock">
      <CircularProgressbar
        value={percentage}
        text={""}
        styles={
          time == 0
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
