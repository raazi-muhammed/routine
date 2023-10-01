import React from "react";

const SingleRoutine = ({ name, duration }) => {
	return (
		<section className="card bg-primary text-white p-3 ">
			<p className="heading5 fw-bold m-0">{name}</p>
			<p className="m-0">{duration}</p>
		</section>
	);
};

export default SingleRoutine;
