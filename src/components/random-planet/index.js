import React from "react"

import SwapiSerwice from "../../services/swapi-service"

class RandomPlanet extends React.Component {

	swapiSerwice = new SwapiSerwice();

	state = {
		planet: {}
	}

	constructor() {
		super();
		this.updatePlanet();
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet });
	}

	updatePlanet() {
		const id = Math.floor(Math.random()*12) + 2

		this.swapiSerwice.getPlanet(id).then(this.onPlanetLoaded);
	}
	
	render() {
		return (
			<div className="case">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${ this.state.planet.id }.jpg`} alt="Planet" />
				
				<div className="planet-info">
					<h1 className="planet-name">{ this.state.planet.name }</h1>
					<div className="info population">Population: <span>{ this.state.planet.population }</span></div>
					<div className="info rotation">Rotation Period: <span></span>{ this.state.planet.rotationPeriod }</div>
					<div className="info diameter">Diameter: <span></span>{ this.state.planet.diameter }</div>
				</div>
			</div>
		)
	}
}

export default RandomPlanet