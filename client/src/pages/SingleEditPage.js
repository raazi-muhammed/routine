import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const SingleEditPage = () => {
	const params = useParams();

	function handleDelete(e, name) {
		e.preventDefault();
		console.log("delete");
		console.log(name);
		const toDelete = {
			name: "task",
		};
		let data = axios
			.delete(
				"http://localhost:5000/api/remove-task/65182f5139b24529cee39b0a",
				toDelete
			)
			.then(() => {
				console.log(data);
			});
	}
	return (
		<div>
			<p>Hi</p>
			<p>{JSON.stringify(params.name)}</p>
			<button onClick={(e) => handleDelete(e, params.name)}>Delete</button>
		</div>
	);
};

export default SingleEditPage;
