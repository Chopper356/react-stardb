import React from "react"

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="menu">
					<h1>Star DB</h1>
					<div className="list">
						<div>People</div>
						<div>Planets</div>
						<div>Starships</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header