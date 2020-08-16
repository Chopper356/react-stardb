import React from "react"

import Header from "../header/"
import RandomPlanet from "../random-planet/"
import PeoplePage from "../people-page/"
import Error from "../error/"

class App extends React.Component {

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
			<div className="wrapper">
				<Header />
				<RandomPlanet />

				<PeoplePage />
			</div>
		)
	}
}

export default App