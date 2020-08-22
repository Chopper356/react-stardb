import React from "react"

import SwapiSerwice from "../../services/swapi-service"
import Spinner from "../spinner"

const Record = ({ item, field, label }) => {

	return (
		<div className="info gender">{ label }: <span>{ item[field] }</span></div>
	)
}

export {
	Record
}

class ItemDetails extends React.Component {

	swapiService = new SwapiSerwice();

	state = {
		item: {},
		image: null
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.itemId !== this.props.itemId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		if (!this.props.itemId) {
			return;
		}

		this.setState({ item: {} })

		const { itemId, getData, getImageUrl } = this.props

		getData(itemId).then((item) => {
			this.setState({ 
				item, 
				image: getImageUrl(item) 
			});
		});
	}

	render() {

		// const {name, gender, birthYear, eyeColor} = this.state.item

		if (!this.state.item) {
			return (
				<div>Select person</div>
			)
		}

		if (!this.state.item.name) {
			return (
				<div className="person-details">
					<Spinner />
				</div>
			)
		}

		return (
			<div className="person-details">
				<img src={ this.state.image } alt="Planet" />

				<div className="person-info">
					<h4>{ this.state.item.name }</h4>
					{
						React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, { item: this.state.item });
						})
					}
				</div>
			</div>
		)
	}
}

export default ItemDetails