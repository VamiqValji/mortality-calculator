import React, { useState } from "react";
import "./App.css";
// Import Components
import Title from "./components/Title";
import Dots from "./components/Dots";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Title />
      <Dots />
      <Input />
    </div>
  );
}

export default App;
