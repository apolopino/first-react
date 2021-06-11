import React from "react";
import PropTypes from "prop-types";
import Button from "./button.js";

//cards
export default function Card(props) {
	return (
		<div className="card">
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">
					{"titulo" in props ? props.titulo : "Titulo"}
				</h5>
				<p className="card-text">
					{"content" in props ? props.content : "Contenido"}
				</p>
				<Button text={props.buttonText} class="primary" />
			</div>
		</div>
	);
}
Card.propTypes = {
	image: PropTypes.string,
	titulo: PropTypes.string,
	content: PropTypes.string,
	buttonText: PropTypes.string
};
