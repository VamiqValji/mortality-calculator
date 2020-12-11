import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
import Dots from "./components/Dots";
import Warning from "./components/Warning";

function App() {

  const [birthdate, setBirthdate] = useState("");
  const [lifeExpectancyYears, setLifeExpectancyYears] = useState(72.563);

  function Submit(e) {
    e.preventDefault();
    let lifeEYinput = document.getElementById("lifeExpectancyYearsInput").value;
    if (lifeEYinput > 1000) {
      alert("Sorry, the life expectancy limit is capped at 1000 years so you don't break your computer with dots!");
    }
    else {
      setLifeExpectancyYears(prev => prev = lifeEYinput);
      let input = document.getElementById('birthdayInput');
      setBirthdate(prev => prev = input.value);
    }
  }

  return (
    <div className="App">
      <Warning />
      <Title />
      <div>Take all of the following information with a grain of salt, as such sensitive topics and dates can't be defined by a defined by this simple calculator.</div>
      <div>If you or someone you know is feeling suicidal, please reach out or help them reach out by calling <a href="https://suicidepreventionlifeline.org/talk-to-someone-now/">1-800-273-8255 (United States)</a>. More information <a href="https://suicidepreventionlifeline.org/">here (United States)</a>.</div>
      <form onSubmit={Submit}>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthdayInput" name="birthday"/>
        <input type="submit"/>
        <label for="lifeExpectancyYears">Life Expectancy:</label>
        <input type="number" id="lifeExpectancyYearsInput" name="lifeExpectancyYears" placeholder="72.563 (Years)"/>
      </form>
      <div>Each • represents a month of your life.</div>
      <div className="life-stat">The average life expectancy at birth across all countries and economies is <span> <a href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN">72.563 years.</a></span></div>
      <Dots birthdate={birthdate} lifeExpectancyYears={lifeExpectancyYears}/>
    </div>
  );
}

export default App;
