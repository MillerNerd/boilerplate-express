require('dotenv').config()
var express = require('express');
var app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    // res.send("Hello Express")
  res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"})

  }
  else {
    res.json({"message": "Hello json"})

  }
})

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time: req.time})
})

module.exports = app;
