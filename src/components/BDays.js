import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function BDays() {
  const [Bdays, SetBdays] = useState({ bdays: [] });
  // const [once, setOnce] = useState(0);

  // function getData() {}

  // let data = fetch("http://localhost:3001").then((res) => res.json());
  // console.log(data);

  let bdayData = []

  useEffect(() => {
    fetch("http://localhost:3001")
    .then((response) => response.json())
    // .then((data) => bdayData.push(data));
    // .then((data) => console.log(data));
    .then((data) =>
      data.forEach((birthdate) => {
        bdayData.push(birthdate.bday);
      })
    );

  console.log(bdayData);

  }, []); /* "If you use this optimization, 
  make sure the array includes all values from 
  the component scope (such as props and state) that 
  change over time and that are used by the effect. 
  Otherwise, your code will reference stale values from 
  previous renders." */

  // setInterval(() => {
  //   console.log(bdayData);
  // }, 1000);

  // i = 0;
  // while (i < lifeExpectancyMonths) {
  //   i = i + 1;
  //   numbers.push(i);
  // }

  // getData();
  // if (once > 0) {
  //   getData();
  // }
  // else {
  //   setOnce ++;
  // }
  // console.log(Bdays);

  const birthdays = bdayData.map(birthday => {return <li>{birthday}</li>});

  console.log(birthdays)
//   const listItems = numbers.map((number) => { // for each number in numbers[]
//     if (number < monthsLived) {
//         return <span className="livedDots">•</span>
//     }
//     else {
//         return <span className="unlivedDots">•</span>
//     }
// });

  // const birthdays = bdayData.forEach(birthday => {
  //   return <li>{birthday}</li>;
  // });

  ReactDOM.render(<li className="bday">{birthdays}</li>, document.getElementById("birthdates"));

  // return (
  //   <div>
  //     {bdayData.map(birthday => <li>{birthday}</li>)}
  //   </div>
  // );
  return(null)
}

export default BDays;
