const collection = require(`../model/user`);

async function getAllData() {
	const userData = await collection.find({});
	return userData;
}

async function getOneUser(id) {
	const userData = await collection.find({ _id: id });
	return userData;
}

async function appendTask(id, req) {
	let order = await collection.find({ _id: id });
	let newOrder = order[0].routines[0].tasks.length;

	const newTask = {
		name: req.body.name,
		order: req.body.order || newOrder,
		duration: req.body.duration,
	};
	let data = await collection.findOneAndUpdate(
		{ _id: id },
		{ $addToSet: { "routines.0.tasks": newTask } },
		{ new: true }
	);

	return data;
}

async function removeTask(id, req) {
	let data = await collection.findOneAndUpdate(
		{ _id: id },
		{ $pull: { "routines.0.tasks": { name: req.body.name } } },
		{ new: true }
	);
	return data;
}

module.exports = { getAllData, getOneUser, appendTask, removeTask };
