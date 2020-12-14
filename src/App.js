import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
import Dots from "./components/Dots";
import Warning from "./components/Warning";
import UserData from "./components/UserData";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [lifeExpectancyYears, setLifeExpectancyYears] = useState(72.563);

  function Submit(e) {
    e.preventDefault();
    let lifeEYinput = document.getElementById("lifeExpectancyYearsInput").value;
    if (lifeEYinput > 1000) {
      alert(
        "Sorry, the life expectancy limit is capped at 1000 years so you don't break your computer with dots!"
      );
    } else {
      setLifeExpectancyYears((prev) => (prev = lifeEYinput));
      let input = document.getElementById("birthdayInput");
      setBirthdate((prev) => (prev = input.value));
    }
  }

  return (
    <div className="App">
      <Warning />
      <Title />
      <div>
        Take all of the following information with a grain of salt, as such
        sensitive topics and dates can't be defined by a defined by this simple
        calculator. If you or someone you know is feeling suicidal, please reach
        out or help them reach out by calling{" "}
        <a href="https://suicidepreventionlifeline.org/talk-to-someone-now/">
          1-800-273-8255 (United States)
        </a>
        . More information{" "}
        <a href="https://suicidepreventionlifeline.org/">
          here (United States)
        </a>
        .
      </div>
      <br />
      <div>Each • represents a month of your life.</div>
      <div>
        The average life expectancy at birth across all countries and economies
        is{" "}
        <span>
          {" "}
          <a href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN">
            72.563 years.
          </a>
        </span>
      </div>
      <br />
      <form onSubmit={Submit} className="form">
        <div className="birthdayInput">
          <label for="birthday">Birthday:</label>
          <br />
          <input type="date" id="birthdayInput" name="birthday" />
        </div>
        <div className="lifeInput">
          <label for="lifeExpectancyYears">Life Expectancy (Years):</label>
          <br />
          <input
            type="number"
            id="lifeExpectancyYearsInput"
            name="lifeExpectancyYears"
            placeholder="72.563"
          />
        </div>
        <input type="submit" />
      </form>
      <Dots birthdate={birthdate} lifeExpectancyYears={lifeExpectancyYears} />
      <UserData birthdate={birthdate} />
      <div className="background"></div>
    </div>
  );
}

export default App;
