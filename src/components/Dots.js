import React from "react";
import ReactDOM from "react-dom";

function Dots({birthdate}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    
    let i = 0;

    let birthMonth = parseInt(birthdate.slice(5,7));
    let birthYear = parseInt(birthdate.slice(0,4));
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let yearsLived = 0;
    let monthsLived = 0;

    let outputLivedMonths = "";

    const lifeExpectancyMonths = 870; /* 72.563 * 12 = 870.756 */ /* factors of 870: 1, 2, 3, 5, 6, 10, 15, 29, 30, 58, 87, 145, 174, 290, 435, 870 */

    if (isNaN(birthMonth) === true || isNaN(birthYear) === true) {
        console.log("Invalid input.");
        outputLivedMonths = "Please enter a valid input."
    } else {
        yearsLived = (currentYear - birthYear) 
        monthsLived = (yearsLived * 12) + (currentMonth - birthMonth);
        outputLivedMonths = "You have lived approximately " + monthsLived + " months of the average life expectancy, or " + ((monthsLived / lifeExpectancyMonths) * 100).toFixed(2) + "% of your life."
    }

    while (i <= lifeExpectancyMonths) {
        i = i + 1;
        numbers.push(i);
    }

    const listItems = numbers.map((number) => { // for each number in numbers[]
        if (number < monthsLived) {
            return <span className="livedDots">•</span>
        }
        else {
            return <span className="unlivedDots">•</span>
        }
    });

    // const maxLifeLivedMonths = 1500; // no one has lived past 125 years of age
    //
    // const listItems = numbers.map((number) => { // for each number in numbers[]
    // if (number > maxLifeLivedMonths) {
    //     return <div>Liar. You're not that old.</div>
    // }
    // else {
    //     if (number > lifeExpectancyMonths) {
    //         return <span className="moreDots">•</span>
    //     } else {
    //         if (number < lifeExpectancyMonths) {
    //             return <span className="livedDots">•</span>
    //         } else {
    //           
    //             return <span className="unlivedDots">•</span>
    //         }
    //     }
    // }
    // });

    ReactDOM.render(
        <li className="dotsContainer">{listItems}</li>,
        document.getElementById("dots")
      );

    return(
        <div>
            <div>{outputLivedMonths}</div>
            <div className="wisely"><b>Use your time wisely.</b></div>
        </div>
    )
}

export default Dots;