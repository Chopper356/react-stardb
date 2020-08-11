import React from "react"

import SwapiSerwice from "../../services/swapi-service"
import Spinner from "../spinner/"

class ItemList extends React.Component {

	swapiService = new SwapiSerwice();

	state = {
		peapleList: null
	}

	componentDidMount() {
		this.swapiService.getAllPeople().then((peopleList) => {
			this.setState({ peopleList });
		});
	}

	renderItems(arr) {
		return arr.map(({id, name}) => {
			return (
				<div key={ id } onClick={ () => this.props.onItemSelected(id) } className="item-name">	
					{ name }
				</div>
			)
		});
	}

	render() {

		if (!this.state.peopleList) {
			return (
				<div className="item-list">
					<div className="spin"><Spinner /></div>
				</div>
			)
		}

		const items = this.renderItems(this.state.peopleList);

		return (
			<div className="item-list">
				{ items }
			</div>
		)
	}
}

export default ItemList