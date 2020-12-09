import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
import Dots from "./components/Dots";
// import Input from "./components/Input";

function App() {

  const [dots, setDots] = useState(0);
  const [birthdate, setBirthdate] = useState("");

  function Submit(e) {
    e.preventDefault();
    let input = document.getElementById('birthday');
    console.log(input.value);
    setDots(prev => prev + 1);
    setBirthdate(prev => prev = input.value);
  }

  return (
    <div className="App">
      <Title />
      <Dots birthdate={birthdate} key={dots}/>
      {/* <Input /> */}
    <form onSubmit={Submit}>
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday"/>
      <input type="submit"/>
    </form>

    <div className="life-stat">
      The average life expectancy at birth across all countries and economies is <span> <a href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN">72.563 years.</a></span>
    </div>
    </div>
  );
}

export default App;
