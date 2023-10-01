import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditRoutinePage = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		let routines;
		axios
			.get("http://localhost:5000/api/get-all-user")
			.then((res) => (routines = res.data))
			.catch((err) => (routines = "axios error"))
			.finally(() => {
				console.log(routines);
				routines = routines[0].routines[0].tasks;

				let type = typeof routines;
				console.log(type);
				setData(routines);
			});

		//setData(data);
	}, []);

	return (
		<main>
			<section>
				<h2 className="heading3">Morning</h2>
				<button className="btn btn-dark">back</button>
			</section>
			<p>{JSON.stringify(data)}</p>

			{Object.entries(data).map(([key, item]) => (
				<section className="bg-dark p-4 m-4">
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={item.name}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Order
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={item.order}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Duration
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={item.duration}
						/>
					</div>
					<Link to={`./${item.name}`}>
						<button className="btn btn-dark">Edit</button>
					</Link>
				</section>
			))}
		</main>
	);
};

export default EditRoutinePage;
