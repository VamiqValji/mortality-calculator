import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function BDays() {
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

  const birthdays = Bdays.map((birthday) => {
    return <li>{birthday}</li>;
  });

  ReactDOM.render(
    <div className="userData">
      <h2>Past User Data</h2>
      <div className="bday">{birthdays}</div>
    </div>,
    document.getElementById("birthdates")
  );

  // return (
  //   <div>
  //     {Bdays.map(birthday => <li>{birthday}</li>)}
  //   </div>
  // );

  return null;
}

export default BDays;
