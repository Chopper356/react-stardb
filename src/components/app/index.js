import React from "react"

import Header from "../header/"
import RandomPlanet from "../random-planet/"
// import PeoplePage from "../people-page/"
import Error from "../error/"
import SwapiSerwice from "../../services/swapi-service"
import ErrorBoundry from "../errorBoundry/"
import { SwapiServiceProvider } from "../swapi-service-context/"
// import ItemDetails, { Record } from "../item-details/"
// import ItemList from "../item-list/"
// import Row from "../row/"

import {
	PlanetDetails,
	PersonDetails,
	StarshipDetails,
	PlanetList,
	PersonList,
	StarshipList
} from "../sw-components"

class App extends React.Component {

	swapiService = new SwapiSerwice();

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {

		if (this.state.hasError) {
			return <Error />
		}

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ this.swapiService }>
					<div className="wrapper">
						<Header />
						<RandomPlanet />

						<PersonDetails itemId={11} />
						<PlanetDetails itemId={5} />
						<StarshipDetails itemId={5} />

						<PersonList onItemSelected={() => {}} />

						<PlanetList onItemSelected={() => {}} />
							
						<StarshipList onItemSelected={() => {}} />
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		)
	}
}

export default App