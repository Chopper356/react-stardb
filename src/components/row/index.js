import React from "react"

const Row = ({ left, right }) => {
	return (
		<div className="info-list">
			{ left }
			<div className="details">
				{ right }
			</div>
		</div>
	)
}

export default Row