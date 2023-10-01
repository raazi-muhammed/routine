const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONOGODB_URL;

mongoose
	.connect(URL)
	.then(() => {
		console.log("Connected");
	})
	.catch((err) => {
		console.log(err);
		console.log("Connection failed");
	});
