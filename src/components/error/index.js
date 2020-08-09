import React from "react"

import "./error.css"
import errorImg from "./robot.gif"

const Error = () => {
	return (
		<div className="error">
			<img src={ errorImg } alt="error"/>
			<h1>BOOM!</h1>
			<div className="text">something has gone terribly wrong</div>
			<div className="text">(but we already sent droids to fix it)</div>
		</div>
	)
}

export default Error