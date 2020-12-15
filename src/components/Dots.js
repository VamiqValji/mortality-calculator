import React from "react";
import ReactDOM from "react-dom";

function Dots({birthdate, lifeExpectancyYears}) {

    let numbers = [];
    
    let i = 0;

    let listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    
    let birthMonth = parseInt(birthdate.slice(5,7));
    let birthYear = parseInt(birthdate.slice(0,4));
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let yearsLived = 0;
    let monthsLived = 0;
    let deathMonth = 0;
    let deathYear = 0;

    if (lifeExpectancyYears === "") {
        lifeExpectancyYears = 72.563;
    }

    let lifeExpectancyMonths = Math.floor(lifeExpectancyYears * 12);

    if (isNaN(birthMonth) === true || isNaN(birthYear) === true) {
        console.log("Invalid input.");
        ReactDOM.render(<div><b>Please enter a valid input.</b></div>, document.getElementById("description"));

    } else {
        yearsLived = (currentYear - birthYear) 
        monthsLived = (yearsLived * 12) + (currentMonth - birthMonth);
        deathYear = Math.floor((((birthYear * 12) + birthMonth) + lifeExpectancyMonths) / 12); // Math.round
        deathMonth = (((birthYear * 12) + birthMonth) + lifeExpectancyMonths) % 12;
        let approximateMonths = deathMonth - currentMonth;
        let approximateYears = deathYear - currentYear;
        if (approximateMonths < 0) {
            approximateYears --;
            approximateMonths = 12 - Math.abs(approximateMonths);
        }
        if (approximateMonths >= 12) {
            approximateYears ++;
            approximateMonths -= 12;
        }

        ReactDOM.render(
        <div>
        <div>You have lived approximately <b>{monthsLived} months</b>, or <b>{((monthsLived / lifeExpectancyMonths) * 100).toFixed(2)}%</b> of the given life expectancy.</div>
        <div>You will die approximately in <b>{listOfMonths[deathMonth]}</b> of <b>{deathYear}</b>.</div>
        <div><b>{listOfMonths[deathMonth]}</b> of <b>{deathYear}</b> is in approximately <b>{approximateYears} years</b> and <b>{approximateMonths}</b> months.</div>
        <div>Each <span className="livedDots">•</span> represents a month of your life that you have <b>lived</b>.</div>
        <div className="wisely"><b>Use your time wisely.</b></div>
        </div>
        , document.getElementById("description"));
    }

    while (i < lifeExpectancyMonths) {
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

    ReactDOM.render(<li className="dotsContainer">{listItems}</li>, document.getElementById("dots"));

    return(null)
}

export default Dots;