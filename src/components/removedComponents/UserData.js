/* import React from "react";
// import mongoose from "mongoose";

function UserData({birthdate}) {

    const mongoose = require("mongoose");
    // mongoose.connect("mongodb+srv://test:<PASSWORD>@cluster0.bipmi.mongodb.net");
    await mongoose.connect('mongodb+srv://test:<PASSWORD>@cluster0.bipmi.mongodb.net'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    };
    // mongoose.connect('mongodb://localhost:3000');
    // connect to data base
    // what mongoDB will take / expect to be passed in
    let dataSchema = new mongoose.Schema ({
        birthDay: birthdate
    })
    console.log(birthdate);

    let data = mongoose.model("data", dataSchema) // model name, what data the 
    // "schema" is being pushed to
    let item = data({birthday: birthdate}).save(function (err) {
        if (err) throw err; // err means error
        console.log("Item saved.");
    })

    return(
        <div>
            <h1>Mortality Calculator</h1>
        </div>
    )
}

export default UserData; 
*/
