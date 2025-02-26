import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = ({sec1, sec2, min1, min2, hour1, hour2}) => {
	return (
		<div className="text-center d-flex botones">

			<button className="btn btn-secondary"><i className="fa-regular fa-clock"></i></button>
			<button className="btn btn-secondary">{hour2}</button>
			<button className="btn btn-secondary">{hour1}</button>
			<button className="btn btn-secondary">{min2}</button>
			<button className="btn btn-secondary">{min1}</button>
			<button className="btn btn-secondary">{sec2}</button>
			<button className="btn btn-secondary">{sec1}</button>

		</div>
	);
};

export default Home;