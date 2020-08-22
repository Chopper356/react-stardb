import React from "react"

import Error from "../error/"

class ErrorBoundry extends React.Component {

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {

		if (this.state.hasError) {
			return <Error />
		}

		return this.props.children
	}
}

export default ErrorBoundry