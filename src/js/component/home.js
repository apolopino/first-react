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
							titulo="Card 1"
							buttonText="Boton 1"
							image="https://garajedelrock.com/wp-content/uploads/2020/05/serj-tankian.jpg"
							content="Los elementos de las card están siendo entregados a través de props. Si no se entrega, cae a un contenido default"
							url="https://getbootstrap.com/docs/4.0/components/card/"
						/>
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}
