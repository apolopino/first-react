import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";

export function Home() {
	return (
		<div>
			<Navbar
				// brand="ReactSite"
				home="Inicio"
				menu2="FAQ"
				menu3="Contacto"></Navbar>
			<div className="container pb-5">
				<Jumbotron
					title="Awesome website"
					paragraph="Esto me ha costao una hostia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat urna est, eu feugiat sem vulputate et. Nulla sodales ac leo eget commodo. Quisque eget est convallis, maximus leo pulvinar, hendrerit massa. Etiam nec elit eu justo suscipit aliquam vel tincidunt erat. Pellentesque non velit mauris."
					// buttonText="Oh yeah"
				/>
				<div className="row">
					<div className="col-md-3">
						<Card
							titulo="Resumen"
							buttonText="Boton 1"
							image="https://garajedelrock.com/wp-content/uploads/2020/05/serj-tankian.jpg"
							content="Los elementos del site están siendo entregados a través de props. Si no se entrega, cae a un contenido default"
							url="https://getbootstrap.com/docs/4.0/components/card/"
						/>
					</div>
					<div className="col-md-3">
						<Card
							titulo="Navbar"
							content="El navbar recibe una Brand y los menú a traves de props. Si no, deja unos por defecto"
						/>
					</div>
					<div className="col-md-3">
						<Card
							titulo="Jumbotron y botones"
							content="El jumbotron no tiene validador. Pero los botones son un componente en sí mismo, que forma parte de otros componentes"
						/>
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer copyright="Apolo Pino" />
		</div>
	);
}
