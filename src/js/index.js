//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function Counter(props) {
	let mystyle = {
		color: "white",
		backgroundColor: "#3e4348",
		padding: "10px",
		fontFamily: "Arial",
		fontSize: "25px",
		borderRadius: "8px",
		height: "100px"
	};

	return (
		<div className="container">
			<div
				className="row text-center align-items-center  "
				style={{ background: "black" }}>
				<div className="col ml-3 mr-3" style={mystyle}>
					<i className="far fa-clock fa-3x" />
				</div>
				<div className="col mr-3" style={mystyle}>
					0
				</div>
				<div className="col mr-3" style={mystyle}>
					0
				</div>
				<div className="col mr-3" style={mystyle}>
					0
				</div>
				<div className="col mr-3" style={mystyle}>
					0
				</div>
				<div className="col mr-3" style={mystyle}>
					0
				</div>
				<div className="col mr-3" style={mystyle}>
					0
				</div>
			</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<Counter />, document.querySelector("#app"));
