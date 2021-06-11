import React from "react";
import PropTypes from "prop-types";

// Creo el navbar

export default function Navbar(props) {
	return (
		<nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
			<div className="container d-flex">
				<a className="navbar-brand" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								{props.home}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.menu1}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.menu2}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">{props.menu3}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
Navbar.propTypes = {
	brand: PropTypes.string.isRequired,
	home: PropTypes.string.isRequired,
	menu1: PropTypes.string.isRequired,
	menu2: PropTypes.string.isRequired,
	menu3: PropTypes.string.isRequired
};
