import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [leap, setleap] = useState("");
  var [userInput, setUserInput] = useState(0);
  function changeHandler(event) {
    var userInput = event.target.value;
    setUserInput(userInput);
  }
  function clickHandler() {
    var isleap = false;
    if (userInput % 4 === 0) {
      if (userInput % 100 === 0) {
        isleap = true;
      } else {
        if (userInput % 400 === 0) {
          isleap = false;
        } else {
          isleap = true;
        }
      }
    } else {
      isleap = false;
    }

    if (isleap === true) {
      leap = "you were born in the leap year";
    } else {
      leap = "you were not born in the leap year";
    }
    setleap(leap);
  }

  return (
    <div className="App">
      <h2 style={{ color: "green" }}>Leap Year Check</h2>
      <h4>Type your Year of Birth Here </h4>
      <div> 👇</div>
      <input
        type="number"
        style={{ margin: "1.3rem", height: "5vh" }}
        onChange={changeHandler}
      ></input>
      <div>
        <button
          style={{
            borderRadius: "0.4rem",
            fontSize: "0.8rem",
            padding: "0.3rem",
            margin: "1rem"
          }}
          onClick={() => clickHandler()}
        >
          Check
        </button>
      </div>
      <div
        style={{
          fontStyle: "italic",
          fotWeight: "bold",
          color: "darkgreen",
          fontSize: "1.2rem",
          padding: "0.5rem"
        }}
      >
        {leap}
      </div>
    </div>
  );
}
