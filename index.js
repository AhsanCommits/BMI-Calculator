

const express = require('express');

const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", (req, res) => {

    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);

    var bmi = Math.floor(w / (h * h));

    res.send(`<p style="display:flex;align-items:center;justify-content:center;height:90vh;font-size:4rem;">Your BMI is ${bmi}</p>`)
});

var port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
