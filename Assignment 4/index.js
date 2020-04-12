const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = 8000
app.listen(PORT, err=>{
	if (err) throw err;
	console.log("server started on Port 8000");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "mywebsite")));

app.post("/post_form", (req, res)=>{
	console.log(req.body);
	var fname = req.body.fname;
	var lname = req.body.lname;
	res.redirect("/thanks.html");
});