import React, { useState } from "react";
import "./App.css";
// Import Components
import Dots from "./components/Dots";
import Warning from "./components/Warning";
import BDays from "./components/BDays";
// Import Images
import githubLogo from "./images/githubLogo.png";
// Other
import axios from "axios";


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
    // onSub();
    console.log(birthdate)
    axios.post("http://localhost:3001/api/birthdays", {
        bday: birthdate,
      })
      .then(res => console.log(res))
      .catch((err) => console.log(err.response.data.message))
    }

  return (
    <div className="App">
      <Warning />
      <h1>Mortality Calculator</h1>
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
        . The point of this project is to simply remind you, the user, to use
        their time wisely and live life to the fullest.
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
          <input type="date" id="birthdayInput" name="birthday" required/>
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
      <a href="https://github.com/VamiqValji/mortality-calculator">
        <div className="madeByVamiqValji">
          Made by: Vamiq Valji
          <img src={githubLogo} alt="GitHub Repo" />
        </div>
      </a>
      <BDays />
      <div className="background"></div>
    </div>
  );
}

export default App;
