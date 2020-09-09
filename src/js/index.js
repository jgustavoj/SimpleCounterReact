//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function Counter(props) {
	let mystyle = {
		color: "white",
		backgroundColor: "#181a1d",
		padding: "10px",
		fontFamily: "Arial",
		fontSize: "60px",
		borderRadius: "8px"
	};

	return (
		<div className="container">
			<div
				className="row text-center align-items-center"
				style={{ background: "black" }}>
				<div
					className="col border border-color-secondary border-top-0 border-bottom-0 ml-3 mr-3 mt-3 mb-3"
					style={mystyle}>
					<i className="far fa-clock fa-lg" />
				</div>
				<div
					className="col border border-color-secondary border-top-0 border-bottom-0 mr-3"
					style={mystyle}>
					{props.digitFour % 10}
				</div>
				<div
					className="col border border-color-secondary border-top-0 border-bottom-0 mr-3"
					style={mystyle}>
					{props.digitThree % 10}
				</div>
				<div
					className="col border border-color-secondary border-top-0 border-bottom-0 mr-3"
					style={mystyle}>
					{props.digitTwo % 10}
				</div>
				<div
					className="col border border-color-secondary border-top-0 border-bottom-0 mr-3"
					style={mystyle}>
					{props.digitOne % 10}
				</div>
			</div>
		</div>
	);
}

Counter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const one = Math.floor(counter / 1);
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	counter++;
	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
// ReactDOM.render(<Counter />, document.querySelector("#app"));
