import React from "react"

import ItemList from "../item-list/"
import ItemDetails from "../item-details"
import Error from "../error/"
import SwapiSerwice from "../../services/swapi-service"
import Row from "../row/"
import ErrorBoundry from "../errorBoundry/"

class PeoplePage extends React.Component {
	
	swapiService = new SwapiSerwice();

	state = {
		selectedPerson: 1
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

		
		const itemList = (
			<ItemList 
				onItemSelected={ this.onPersonSelected }
				getData={ this.swapiService.getAllPeople }>

				{(item) => `${item.name} - ( Birth Year: ${item.birthYear} )`}				
			</ItemList>
		);
		const personDetails = (
			<ErrorBoundry>
				<ItemDetails itemId={ this.state.selectedPerson }/>
			</ErrorBoundry>
		);

		return (
			<Row left={ itemList } right={ personDetails }/>
		)
	}
}

export default PeoplePage