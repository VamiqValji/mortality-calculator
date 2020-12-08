import React from "react";
import ReactDOM from "react-dom";

function Dots() {

    // let li = React.createElement("li", {className="li"}, "test");
    // ReactDOM.render(li, document.getElementsByClassName("dots"));

    let numbers = [1,1,1];
    const listItems = numbers.map((number) =>
    <span>•</span>);

    ReactDOM.render(
        <ul>{listItems}</ul>,
        document.getElementById("dots")
      );

    return(
        <div>
            {/* <li></li>
            <li></li>
            <li></li>
            <li></li> */}
        </div>
    )
}

export default Dots;