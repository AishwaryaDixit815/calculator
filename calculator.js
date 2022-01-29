const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){ //get request sends the data which user needs to get at the specific route
    res.sendFile(__dirname + "/index.html");//__dirname gives the particular path of current directory, no matter on whose computer or server it is present
    //console.log(__dirname) //this displays the directory in which calculator.js is placed, no matter where it is placed 
})

app.post("/", function(req, res){ //post request gets us the data that the user enters
    //req.body accesses the data that the user enters

    //since it is by default parsed into text, we need to explicitly parse it to a number
    var num1 = Number(req.body.num1); //accessing the data of num1 variable (data entered in textbox one)
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("result is " + result); //our response
})

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);

    var result = num1/(num2*num2);

    res.send("Your BMI is " + result);
})

app.listen(port)