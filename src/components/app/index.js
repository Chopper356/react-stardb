import React from "react"

import Header from "../header/"
import RandomPlanet from "../random-planet/"
import ItemList from "../item-list/"
import PersonDetails from "../person-details/"

class App extends React.Component {

	state = {
		selectedPerson: 1
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		return (
			<div className="wrapper">
				<Header />
				<RandomPlanet />

				<div className="info-list">
					<ItemList onItemSelected={ this.onPersonSelected }/>
					<div className="details">
						<PersonDetails personId={ this.state.selectedPerson }/>
					</div>
				</div>
			</div>
		)
	}
}

export default App