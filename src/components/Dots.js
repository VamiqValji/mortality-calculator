import React from "react";
import ReactDOM from "react-dom";

function Dots({dots}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    
    let i = 0;

    while (i < dots + 1) {
        i = i + 1;
        numbers.push(i);
        console.log(numbers);
    }

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