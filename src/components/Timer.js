import React from "react";

export default function Timer({ time, show }) {
  return <h1>{show ? time : "Timer hidden"}</h1>;
}
