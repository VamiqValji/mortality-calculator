import React, {useState} from "react";

function Warning() {

    const [toggle, setToggle] = useState(false);

    function toggleActive() {
    //   if (toggle == false) {
    //     setToggle(true);
    //   } else {
    //     setToggle(false);
    //   }
    setToggle((prev) => !prev); // returns opposite
    }

    return (
    <div>
        <div className={toggle ? "" : "warningActive"}>
            <h1>Hello React</h1>
            {/* {toggle ? 'active' : ""} MEANS toggle (variable state) class on and off if true, otherwise class is "" (nothing) */}
            <button onClick={toggleActive}>Click</button>
        </div>
    </div>
    );
}


export default Warning;