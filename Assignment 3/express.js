const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = 8000;

app.listen(PORT, err=>{
	if (err) throw err;
	console.log('Server started on Port 8000');
});

app.use(bodyParser.urlencoded({ extended: true }));

//Set static folder

app.use(express.static(path.join(__dirname, "mywebsite")));


