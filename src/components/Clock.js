import React from "react";

export default function Clock({ sessionLength, time }) {
  let completed = (sessionLength - time) / sessionLength;

  return <h1>clock {completed}</h1>;
}
