import React from "react"

import Header from "../header/"
import RandomPlanet from "../random-planet/"
// import PeoplePage from "../people-page/"
import Error from "../error/"
import SwapiSerwice from "../../services/swapi-service"
import ErrorBoundry from "../errorBoundry/"
import ItemDetails, { Record } from "../item-details/"
import Row from "../row/"

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

		const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

		const personDetails = (
				<ItemDetails getData={ getPerson } itemId={12} getImageUrl={ getPersonImage }>
					<Record field="gender" label="Gender" />
					<Record field="eyeColor" label="Eye Color" />
				</ItemDetails>
		)

		const starshipDetails = (
				<ItemDetails getData={ getStarship } itemId={12} getImageUrl={ getStarshipImage }>
					<Record field="model" label="Model" />
					<Record field="length" label="Length" />
					<Record field="costInCredits" label="Cost" />	
				</ItemDetails>
		)
		return (
			<ErrorBoundry>
				<div className="wrapper">
					<Header />
					<RandomPlanet />

					<Row left={ personDetails } right={ starshipDetails }/>
				</div>
			</ErrorBoundry>
		)
	}
}

export default App