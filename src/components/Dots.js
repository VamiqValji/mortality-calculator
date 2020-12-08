import React from "react";
import ReactDOM from "react-dom";

function Dots({dots}) {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));
    
    let numbers = [];
    // let i = dots;
    for (i = 0; i <= dots; i--) {
        numbers.push(1);
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