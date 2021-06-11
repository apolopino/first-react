import React from "react";
import PropTypes from "prop-types";
import Button from "./button.js";

//Jumbotron
export default function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-3">{props.title}</h1>
				<p>{props.paragraph}</p>
				<p>
					<Button class="primary btn-lg" text={props.buttonText} />
				</p>
			</div>
		</div>
	);
}
Jumbotron.propTypes = {
	title: PropTypes.string,
	paragraph: PropTypes.string,
	buttonText: PropTypes.string
};
