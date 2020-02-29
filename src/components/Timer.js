import React from "react";

export default function Timer({ time, show }) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = (time - hours * 3600 - minutes * 60) % 60;

  return (
    <h1>{show ? hours + ":" + minutes + ":" + seconds : "Timer hidden"}</h1>
  );
}
