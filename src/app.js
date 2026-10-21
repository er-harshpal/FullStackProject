const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
    res.send("Hell");
} )

app.use("/", (req, res) => {
    res.send("Namaste Hp");
})

app.listen(7777, () => {
    console.log("Hello Server");
});