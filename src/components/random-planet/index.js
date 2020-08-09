import React from "react"

import SwapiSerwice from "../../services/swapi-service"
import Spinner from "../spinner"

class RandomPlanet extends React.Component {

	swapiSerwice = new SwapiSerwice();

	state = {
		planet: {},
		loading: true
	}

	constructor() {
		super();
		this.updatePlanet();
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet, loading: false });
	}

	updatePlanet() {
		const id = Math.round(Math.random()*25);

		this.swapiSerwice.getPlanet(id).then(this.onPlanetLoaded);
	}
	
	render() {

		if (this.state.loading) {
			return (
				<div className="case">
					<Spinner />
				</div>
			)
		}

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