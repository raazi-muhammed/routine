import React, { useState } from "react";
import SingleRoutine from "../components/SingleRoutine";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const RoutineTracker = () => {
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
				<button className="btn btn-dark">back</button>{" "}
				<Link to={"/edit"}>
					<button className="btn btn-dark">Edit</button>
				</Link>
				<Link to={"/add-task"}>
					<button className="btn btn-dark">Add</button>
				</Link>
			</section>
			<p>{JSON.stringify(data)}</p>
			<section className="d-flex flex-column  gap-3">
				{Object.entries(data).map(([key, item]) => (
					<div key={key}>
						<SingleRoutine name={item.name} duration={item.duration} />
					</div>
				))}
			</section>
		</main>
	);
};

export default RoutineTracker;
