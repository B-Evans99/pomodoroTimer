import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Clock({ sessionLength, time }) {
  let percentage = ((sessionLength - time) / sessionLength) * 100;

  return (
    <div className="clock">
      <CircularProgressbar value={percentage} text={""} />
    </div>
  );
}
