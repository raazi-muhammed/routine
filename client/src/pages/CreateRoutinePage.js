import React, { useState } from "react";
import axios from "axios";

const CreateRoutinePage = () => {
	const [name, setName] = useState("");
	const [duration, setDuration] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		const newTask = {
			name: name,
			duration: duration,
		};
		axios.post(
			"http://localhost:5000/api/add-task/65182f5139b24529cee39b0a",
			newTask
		);

		setName("");
		setDuration("");

		console.log(newTask);
	}
	return (
		<main>
			<form>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="duration" className="form-label">
						Duration
					</label>
					<input
						type="text"
						className="form-control"
						id="duration"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={(e) => handleSubmit(e)}>
					Submit
				</button>
			</form>
		</main>
	);
};

export default CreateRoutinePage;
