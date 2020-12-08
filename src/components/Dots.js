import React from "react";
import ReactDOM from "react-dom";

function Dots({dots, birthdate}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    
    let i = 0;

    while (i < dots + 1) {
        i = i + 1;
        numbers.push(i);
        console.log(numbers);
        
    }

    console.log(birthdate);

    let currentMonth = birthdate.slice(5,7);
    let monthsLeft = birthdate.slice(5,7);
    let currentYear = birthdate.slice(0,4);
    let yearsLeft = birthdate.slice(4,7);
    console.log(currentMonth, currentYear);

    const listItems = numbers.map((number) => // for each number in numbers[]
    <span>•</span>);

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