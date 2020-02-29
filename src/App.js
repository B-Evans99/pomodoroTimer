import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.js";
import Timer from "./components/Timer.js";
import SettingController from "./components/SettingController.js";

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Timer></Timer>
      <SettingController></SettingController>
    </div>
  );
}

export default App;
