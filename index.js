const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();

const app = express();
//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookie middleware
app.use(cookieParser());
const userRouter = require("./routes/userRoutes");
app.use("/api", userRouter);

app.get("/", (req, res) => {
	res.send("Hi from youtube live");
});
app.listen(3000, () => {
	console.log("server is running in port 3000");
});
