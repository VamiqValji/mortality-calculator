import React, { useState } from "react";
import ReactDOM from "react-dom";

function BDays() {

  const [Bdays, SetBdays] = useState({bdays: []});

  // componentDidMount( {

  // })

  fetch("/")
  .then(res => res.json())
  .then(bdays => this.setState({ bdays}))

  // function toggleActive() {
  //   setToggle((prev) => !prev); 
  // }

  return (
    <div>b</div>
    );
}

export default BDays;
