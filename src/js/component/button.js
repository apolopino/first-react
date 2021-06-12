import React from "react";
import PropTypes from "prop-types";

//button
export default function Button(props) {
	return (
		<a
			href={"url" in props ? props.url : "#"}
			className={"btn btn-" + props.class}>
			{typeof props.text === "undefined" ? "Click here" : props.text}
		</a>
	);
}
Button.propTypes = {
	class: PropTypes.string,
	text: PropTypes.string,
	url: PropTypes.string
};
