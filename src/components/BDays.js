import React, { useState } from "react";
import ReactDOM from "react-dom";

function BDays() {
  const [Bdays, SetBdays] = useState({ bdays: [] });
  const [once, setOnce] = useState(0);

  function getData() {}

  fetch("/server").then((res) => console.log(res));
  // .then(bdays => SetBdays(prev => prev = {bdays}))

  getData();
  // if (once > 0) {
  //   getData();
  // }
  // else {
  //   setOnce ++;
  // }
  // console.log(Bdays);

  //   while (i < lifeExpectancyMonths) {
  //     i = i + 1;
  //     numbers.push(i);
  // }

  // const listItems = numbers.map((number) => { // for each number in numbers[]
  //     if (number < monthsLived) {
  //         return <span className="livedDots">•</span>
  //     }
  //     else {
  //         return <span className="unlivedDots">•</span>
  //     }
  // });

  // ReactDOM.render(<li>{listItems}</li>, document.getElementById("birthdates"));

  return null;
}

export default BDays;
