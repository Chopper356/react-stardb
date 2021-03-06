import React from "react"

import SwapiSerwice from "../../services/swapi-service"
import Spinner from "../spinner"
import Error from "../error"

class RandomPlanet extends React.Component {

	swapiSerwice = new SwapiSerwice();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updatePlanet();
		setInterval(() => this.updatePlanet(), 5000);
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet, loading: false });
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true
		});
	}

	updatePlanet = () => {
		const id = Math.round(Math.random()*25) + 1;

		this.swapiSerwice.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
	}
	
	render() {
		return (
			<div className="case">
				{ this.state.error && <Error /> }
				{ this.state.loading && <Spinner /> }
				{ !this.state.loading && !this.state.error && <RandomPlanetDetails planet={ this.state.planet } updatePlanet={ () => this.updatePlanet }/> }
			</div>
		)
	}
}

const RandomPlanetDetails = ({ planet, updatePlanet }) => (
	<>
		<img src={`https://starwars-visualguide.com/assets/img/planets/${ planet.id }.jpg`} alt="Planet" />

		<div className="planet-info">
			<div className="header">
				<h1 className="planet-name">{ planet.name }</h1>
				<i onClick={ updatePlanet() } className="fas fa-redo-alt"></i>
			</div>
			<div className="info population">Population: <span>{ planet.population }</span></div>
			<div className="info rotation">Rotation Period: <span></span>{ planet.rotationPeriod }</div>
			<div className="info diameter">Diameter: <span></span>{ planet.diameter }</div>
		</div>
	</>
)

export default RandomPlanet