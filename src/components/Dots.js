import React from "react";
import ReactDOM from "react-dom";

function Dots({birthdate}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    
    let i = 0;

    const lifeExpectancyMonths = 870; /* 72.563 * 12 = 870.756 */

    while (i < lifeExpectancyMonths + 1) {
        i = i + 1;
        numbers.push(i);
        // console.log(numbers);
    }

    console.log(birthdate);

    let birthMonth = parseInt(birthdate.slice(5,7));
    let birthYear = parseInt(birthdate.slice(0,4));
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let yearsLived = 0;
    let monthsLived = 0;

    // monthslived = birthmonth - currentdate, if birthmonth is greater than 
    if (birthMonth == "" && birthYear == "") {
        console.log("Invalid input.");
    }
    else {
        console.log(birthMonth, birthYear);
        if (birthMonth - currentMonth  ) {
        } else if (birthMonth - currentMonth ) {
        } else {

        }

        // let monthsLeft = lifeExpectancyMonths - monthsLived;
    }
    // console.log(new Date().getTime());

    const listItems = numbers.map((number) => // for each number in numbers[]
    <span>•</span>
    );

    ReactDOM.render(
        <ul>{listItems}</ul>,
        document.getElementById("dots")
      );

    return(null)
        // <div>
        //     <li></li>
        //     <li></li>
        //     <li></li>
        //     <li></li>
        // </div>
    // )
}

export default Dots;