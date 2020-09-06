import React from "react"

import Spinner from "../spinner"
// import ErrorIndicator from "../errorBoundry/"

export const withData = (View, getData) => {
	
	return class extends React.Component {

		state = {
			data: null
		}
		
		componentDidMount() {
	
			getData().then((data) => {
				this.setState({ data });
			});
		}

		render() {
			
			if (!this.state.data) {
				return (
					<div className="item-list">
						<div className="spin"><Spinner /></div>
					</div>
				)
			}

			return <View {...this.props} data={this.state.data} />
		}
	}
}
