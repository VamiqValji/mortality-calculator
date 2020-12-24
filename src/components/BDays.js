import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function BDays(/*{bd}*/) {
  const [Bdays, SetBdays] = useState([]);

  let bdayData = [];

  const getData = async () => {
    const res = await fetch("http://localhost:3001/api/birthdays");
    const data = await res.json();
    data.forEach((birthdate) => {
      bdayData.push(birthdate.bday);
    });
    SetBdays((prev) => (prev = bdayData));
  };

  useEffect(() => {
    getData();
  }, []);

  // if (bd.length < 5 && bd.length > 12 && Bdays.includes(bd) === false) {
  //   console.log(bd)
  //   SetBdays(prev => prev.push(bd));
  // }

  const birthdays = Bdays.map((birthday) => {
    return <li>{birthday}</li>;
  });

  if (birthdays.length > 0) {
    ReactDOM.render(
      <div className="userData">
        <p>
          <h2>Past User Birthdates</h2>
          <br/>
          <div className="bday">{birthdays}</div>
        </p>
      </div>,
      document.getElementById("birthdates")
    );
  }

  // return (
  //   <div>
  //     {Bdays.map(birthday => <li>{birthday}</li>)}
  //   </div>
  // );

  return null;
}

export default BDays;
