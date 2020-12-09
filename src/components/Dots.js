import React from "react";
import ReactDOM from "react-dom";

function Dots({birthdate}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    
    let i = 0;

    const lifeExpectancyMonths = 870; /* 72.563 * 12 = 870.756 */ /* factors of 870: 1, 2, 3, 5, 6, 10, 15, 29, 30, 58, 87, 145, 174, 290, 435, 870 */

    while (i < lifeExpectancyMonths + 1) {
        i = i + 1;
        numbers.push(i);
    }

    let birthMonth = parseInt(birthdate.slice(5,7));
    let birthYear = parseInt(birthdate.slice(0,4));
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let yearsLived = 0;
    let monthsLived = 0;

    let output = "";

    if (isNaN(birthMonth) === true || isNaN(birthYear) === true) {
        console.log("Invalid input.");
        output = "Please enter a valid input."
    } else {
        yearsLived = (currentYear - birthYear) 
        monthsLived = (yearsLived * 12) + (currentMonth - birthMonth);
        console.log(monthsLived + " months lived.");
        output = "You have lived " + monthsLived + " months."
    }

    const listItems = numbers.map((number) => // for each number in numbers[]
    <span>•</span>
    );

    ReactDOM.render(
        <li className="dotsContainer">{listItems}</li>,
        document.getElementById("dots")
      );

    return(
        <div>
            <div>{output}</div>
        </div>
    )
}

export default Dots;