const express = require("express");
const app = express();
const port = 8080;
const path = require("path")

app.set("views" , path.join(__dirname , "views"))
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.listen(port , (req,res)=>{
    console.log("app is started successfully");
})