import React from "react"

import ItemList from "../item-list/"
import PersonDetails from "../person-details/"
import Error from "../error/"

class PeoplePage extends React.Component {
	
	state = {
		selectedPerson: 1,
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {

		if (this.state.hasError) {
			return <Error />
		}

		return (
			<div className="info-list">
					<ItemList onItemSelected={ this.onPersonSelected }/>
					<div className="details">
						<PersonDetails personId={ this.state.selectedPerson }/>
					</div>
				</div>
		)
	}
}

export default PeoplePage