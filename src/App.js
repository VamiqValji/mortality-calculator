import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
// import Dots from "./components/Dots";
// import Input from "./components/Input";

function App() {

  var birthday = document.getElementsByClassName('birthday');
  function Submit(e) {
    e.preventDefault();
    console.log(birthday.value);
  }

  return (
    <div className="App">
      <Title />
      {/* <Dots /> */}
      {/* <Input /> */}
    <form onSubmit={Submit}>
      <label for="birthday">Birthday:</label>
      <input className="birthday" type="date" id="birthday" name="birthday"/>
      <input type="submit"/>
    </form>


    </div>
  );
}

export default App;
