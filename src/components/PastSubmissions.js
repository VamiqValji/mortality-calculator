import React, {useState} from "react";
import ReactDOM from "react-dom";

function PastSubmissions({bd, li}) {

//     const [birthdays, setBirthdays] = useState([]);
//     const [lives, setLives] = useState([]);
//     if (li !== "" || bd !== "") {
//         setBirthdays(prev => prev.push(bd));
//         setLives(prev => prev.push(li));
//     }
    
//     let bdSubmissions = birthdays.map(() => { // for each number in numbers[]
//         return <li>Birthdate: {bd}</li>
//     });

//     let liSubmissions = lives.map(() => { // for each number in numbers[]
//         return <li>Life Expectancy: {li}</li>
//     });

//     ReactDOM.render(<div><ul>{bdSubmissions}</ul> <ul>{liSubmissions}</ul></div>, document.getElementById("submissions"));

    const fs = require("fs");
    // if (fs.readFile) {

    // }
    fs.writeFile("-" + bd, "utf8")
    fs.writeFile("-" + li, "utf8")
//   return (
//     <div>
//       <div className="psTitle">Past Submissions</div>
//     </div>
//   );

}

export default PastSubmissions;
