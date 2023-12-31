const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./routes/api");
const cors = require("cors");
//const corsMiddleware = require("./middleware/corsMiddleware");

require("dotenv").config();
const PORT = process.env.PORT;

const { getAllData } = require("./controller/dataBase");

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static
app.use("/static", express.static(path.join(__dirname, "/public")));

/* cors */
app.use(cors());
//app.use(corsMiddleware);

app.use("/api", api);

app.get("*", async (req, res) => {
	res.json({ hi: "hi" });
	console.log(process.env.PORT);
});

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
