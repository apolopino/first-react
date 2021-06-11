import React from "react";
import PropTypes from "prop-types";

//button
export default function Button(props) {
	return (
		<a href="#" className={"btn btn-" + props.class}>
			{props.text}
		</a>
	);
}
Button.propTypes = {
	class: PropTypes.string,
	text: PropTypes.string
};
