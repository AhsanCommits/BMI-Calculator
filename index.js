

const express = require('express');

const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {

    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);

    var bmi = Math.floor(w / (h * h));

    res.send(`Your BMI is ${bmi}`);
});

var port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
