import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

export function Home() {
	return (
		<div>
			<Navbar
				brand="ReactSite"
				home="Inicio"
				menu1="Login"
				menu2="FAQ"
				menu3="Contacto"></Navbar>
			<div className="container">
				<Jumbotron
					title="Awesome website"
					paragraph="Esto me ha costao una hostia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat urna est, eu feugiat sem vulputate et. Nulla sodales ac leo eget commodo. Quisque eget est convallis, maximus leo pulvinar, hendrerit massa. Etiam nec elit eu justo suscipit aliquam vel tincidunt erat. Pellentesque non velit mauris."
					buttonText="Oh yeah"
				/>
				<div className="row">
					<div className="col-md-3">
						<Card
							titulo="Titulo 1"
							buttonText="Texto1"
							image="https://i.stack.imgur.com/y9DpT.jpg"
							content=""
						/>
					</div>
					<div className="col-md-3">
						<Card
							titulo="Titulo 1"
							buttonText="Texto2"
							image="https://i.stack.imgur.com/y9DpT.jpg"
						/>
					</div>
					<div className="col-md-3">
						<Card
							titulo="Titulo 1"
							buttonText="Texto3"
							image="https://i.stack.imgur.com/y9DpT.jpg"
						/>
					</div>
					<div className="col-md-3">
						<Card
							buttonText="Texto4"
							image="https://i.stack.imgur.com/y9DpT.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
