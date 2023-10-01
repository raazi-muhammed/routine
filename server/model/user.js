const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},

	profilePic: {
		type: String,
	},
	routines: {
		type: Array,
	},
});

const collection = mongoose.model("user", loginSchema);

module.exports = collection;
