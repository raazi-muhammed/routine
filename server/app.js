const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const collection = require(`./config/mongodbConfig`);

const PORT = 5000;

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static
app.use("/static", express.static(path.join(__dirname, "/public")));

app.get("*", async (req, res) => {
	res.json({ hi: "hi" });
	console.log(process.env.PORT);
	const userToEdit = await collection.find({});
	console.log(userToEdit);
});

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
