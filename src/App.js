import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
import Dots from "./components/Dots";
// import Input from "./components/Input";

function App() {

  // const [dots, setDots] = useState(0);
  const [birthdate, setBirthdate] = useState("");
  const [lifeExpectancyYears, setLifeExpectancyYears] = useState(72.563);

  function Submit(e) {
    e.preventDefault();
    let input = document.getElementById('birthdayInput');
    // setDots(prev => prev + 1);
    setBirthdate(prev => prev = input.value);
    setLifeExpectancyYears(prev => prev = document.getElementById("lifeExpectancyYearsInput").value);
  }

  return (
    <div className="App">
      <Title />
      <div>Take all of the following information with a grain of salt, as such sensitive topics and dates can't be defined by a defined by a simple calculator.</div>
      <div>If you, are someone you know is feeling suicidal, please reach out or help them reach out by calling <a href="https://suicidepreventionlifeline.org/talk-to-someone-now/">1-800-273-8255 (United States)</a>. More information <a href="https://suicidepreventionlifeline.org/">here (United States)</a>.</div>
      {/* <Input /> */}
    <form onSubmit={Submit}>
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthdayInput" name="birthday"/>
      <input type="submit"/>
      <label for="lifeExpectancyYears">Life Expectancy:</label>
      <input type="number" id="lifeExpectancyYearsInput" name="lifeExpectancyYears" placeholder="72.563 (Years)"/>
    </form>
   
    <div>Each • represents a month of your life.</div>
    <div className="life-stat">
      The average life expectancy at birth across all countries and economies is <span> <a href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN">72.563 years.</a></span>
    </div>
    <Dots birthdate={birthdate} lifeExpectancyYears={lifeExpectancyYears}/>
    </div>
  );
}

export default App;
