import React from "react"

class PersonDetails extends React.Component {
	render() {
		return (
			<div className="person-details">
				<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="Planet" />

				<div className="person-info">
					<h1 className="person-name">Person Name</h1>
					<div className="info gender">Gender: <span>34535</span></div>
					<div className="info birth-year">Birth Year: <span></span>54345</div>
					<div className="info eye-color">Eye Color: <span></span>12334</div>
				</div>
			</div>
		)
	}
}

export default PersonDetails