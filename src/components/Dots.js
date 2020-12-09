import React from "react";
import ReactDOM from "react-dom";

function Dots({birthdate}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    let livedDots = [];
    let unlivedDots = [];
    
    let i = 0;

    let birthMonth = parseInt(birthdate.slice(5,7));
    let birthYear = parseInt(birthdate.slice(0,4));
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let yearsLived = 0;
    let monthsLived = 0;

    let output = "";

    const lifeExpectancyMonths = 870; /* 72.563 * 12 = 870.756 */ /* factors of 870: 1, 2, 3, 5, 6, 10, 15, 29, 30, 58, 87, 145, 174, 290, 435, 870 */

    if (isNaN(birthMonth) === true || isNaN(birthYear) === true) {
        console.log("Invalid input.");
        output = "Please enter a valid input."
    } else {
        yearsLived = (currentYear - birthYear) 
        monthsLived = (yearsLived * 12) + (currentMonth - birthMonth);
        console.log(monthsLived + " months lived.");
        output = "You have lived " + monthsLived + " months."
    }

    while (i <= lifeExpectancyMonths) {
        i = i + 1;
        numbers.push(i);
        if (i < 5) {
            livedDots.push(i)
        }
        else {
            unlivedDots.push(i)
        }
    }

    let livedDotsMap = []
    let unlivedDotsMap = []

    let livedDotsMap = livedDots.map((number) => // for each number in numbers[]
    livedDotsMap.push(<span className="liveDot">•</span>)
    );

    let unlivedDotsMap = unlivedDots.map((number) => // for each number in numbers[]
    unlivedDotsMap.push(<span className="unliveDot">•</span>)
    );
    console.log(livedDotsMap,unlivedDotsMap);
    console.log(livedDotsMap + unlivedDotsMap);

    // const listItems = livedDotsMap + unlivedDotsMap;

    const listItems = numbers.map((number) => // for each number in numbers[]
    <span>•</span>
    );

    const listItems = numbers.map((number) => // for each number in numbers[]
    <span>•</span>
    );

    console.log(listItems);

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