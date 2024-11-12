const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();

const app = express();
app.get("/", (req, res) => {
	res.send("Hi from youtube live");
});
app.listen(3000, () => {
	console.log("server is running in port 3000");
});
