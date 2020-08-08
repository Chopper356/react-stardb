import React from "react"

class RandomPlanet extends React.Component {
	render() {
		return (
			<div className="case">
				<img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" alt="Planet" />
				
				<div className="planet-info">
					<h1 className="planet-name">Planet Name</h1>
					<div className="info population">Population: <span>34535</span></div>
					<div className="info rotation">Rotation Period: <span></span>54345</div>
					<div className="info diameter">Diameter: <span></span>12334</div>
				</div>
			</div>
		)
	}
}

export default RandomPlanet