import React from "react"

import Header from "../header/"
import RandomPlanet from "../random-planet/"
import ItemList from "../item-list/"
import PersonDetails from "../person-details/"

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<RandomPlanet />

				<div className="info-list">
					<ItemList />
					<div className="details">
						<PersonDetails />
					</div>
				</div>
			</div>
		)
	}
}

export default App