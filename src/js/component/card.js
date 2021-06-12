import React from "react";
import PropTypes from "prop-types";
import Button from "./button.js";

//cards
export default function Card(props) {
	return (
		<div className="card text-center">
			<img
				src={
					"image" in props
						? props.image
						: "https://i.stack.imgur.com/y9DpT.jpg"
				}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">
					{"titulo" in props ? props.titulo : "Card Title"}
				</h5>
				<p className="card-text">
					{"content" in props
						? props.content
						: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor sapien vitae congue volutpat."}
				</p>
				<Button
					text={props.buttonText}
					class="primary"
					url={"url" in props ? props.url : "#"}
				/>
			</div>
		</div>
	);
}
Card.propTypes = {
	image: PropTypes.string,
	titulo: PropTypes.string,
	content: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string
};
