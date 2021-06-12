import React from "react";
import PropTypes from "prop-types";

//Creo el footer
export default function Footer(props) {
	return (
		<footer className="text-muted footer-dark bg-dark text-center mt-5">
			<div className="container pt-5 pb-5">
				<p>
					Copyright © 2021{" "}
					{"copyright" in props ? props.copyright : "Your brand here"}
				</p>
			</div>
		</footer>
	);
}
Footer.propTypes = {
	copyright: PropTypes.string
};
