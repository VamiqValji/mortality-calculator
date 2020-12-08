import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
import Dots from "./components/Dots";
// import Input from "./components/Input";

function App() {

  const [dots, setDots] = useState(0);

  function Submit(e) {
    e.preventDefault();
    let input = document.getElementById('birthday');
    console.log(input.value);
    setDots(prev => prev + 1);
  }

  return (
    <div className="App">
      <Title />
      <Dots dots={dots} />
      {/* <Input /> */}
    <form onSubmit={Submit}>
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday"/>
      <input type="submit"/>
    </form>
    </div>
  );
}

export default App;
