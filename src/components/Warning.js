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
            <div className="warningDiv">
                <h1 className="warningTitle">Notice to User</h1>
                <div classname="warningText">Take all of the following information with a grain of salt, as such sensitive topics and dates can't be defined by a defined by this simple calculator. If you or someone you know is feeling suicidal, please reach out or help them reach out by calling <a href="https://suicidepreventionlifeline.org/talk-to-someone-now/">1-800-273-8255 (United States)</a>. More information <a href="https://suicidepreventionlifeline.org/">here (United States)</a>.</div>
                {/* {toggle ? 'active' : ""} MEANS toggle (variable state) class on and off if true, otherwise class is "" (nothing) */}
                <button className="warningButton" onClick={toggleActive}>Click</button>
            </div>
        </div>
    </div>
    );
}


export default Warning;