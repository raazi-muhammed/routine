const express = require("express");
const router = express.Router();
require("../config/mongodbConfig.js");
const {
	getAllData,
	getOneUser,
	appendTask,
	removeTask,
} = require("../controller/dataBase");

const collection = require(`../model/user`);

// Getting all routine
router.get("/get-all-user", async (req, res) => {
	let data = await getAllData();
	res.json(data);
});

// Getting one routine
router.get("/get-one-user/:id", async (req, res) => {
	const id = req.params.id;
	let data = await getOneUser(id);
	res.json(data);
});

// Creating one routine
router.post("/add-task/:id", async (req, res) => {
	const id = req.params.id;
	let updatedUser = await appendTask(id, req);
	res.json(updatedUser);
});

// Updating one routine
router.patch("/", (req, res) => {});

// Deleting one routine
router.delete("/remove-task/:id", async (req, res) => {
	const id = req.params.id;
	let data = await removeTask(id, req);
	res.json(data);
});

module.exports = router;
