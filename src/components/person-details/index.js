import React from "react"

import SwapiSerwice from "../../services/swapi-service"
import Spinner from "../spinner/"

class PersonDetails extends React.Component {

	swapiService = new SwapiSerwice();

	state = {
		person: {}
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.personId !== this.props.personId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		if (!this.props.personId) {
			return;
		}

		this.setState({ person: {} })

		this.swapiService.getPerson(this.props.personId).then((person) => {
			this.setState({ person });
		});
	}

	render() {

		const {id ,name, gender, birthYear, eyeColor} = this.state.person

		if (!this.state.person) {
			return (
				<div>Select person</div>
			)
		}

		if (!this.state.person.name) {
			return (
				<div className="person-details">
					<Spinner />
				</div>
			)
		}

		return (
			<div className="person-details">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Planet" />

				<div className="person-info">
					<h1 className="person-name">{ name }</h1>
					<div className="info gender">Gender: <span>{ gender }</span></div>
					<div className="info birth-year">Birth Year: <span></span>{ birthYear }</div>
					<div className="info eye-color">Eye Color: <span></span>{ eyeColor }</div>
				</div>
			</div>
		)
	}
}

export default PersonDetails