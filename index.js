const express = require ("express");
const port =5000;
const path = require("path");

const app = express();

app.set ("view engine","ejs");
// app.use(express.urlencoded());
app.use ("/public", express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("project");
});

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("port is start in" + port);
});