import React from "react"

import Spinner from "../spinner/"

class ItemList extends React.Component {

	state = {
		itemList: null
	}

	
	componentDidMount() {

		const { getData } = this.props;

		getData().then((itemList) => {
			this.setState({ itemList });
		});
	}

	renderItems(arr) {
		return arr.map((item) => {
			const { id } = item;

			const label = this.props.children(item);

			return (
				<div key={ id } onClick={ () => this.props.onItemSelected(id) } className="item-name">	
					{ label }
				</div>
			)
		});
	}

	render() {

		if (!this.state.itemList) {
			return (
				<div className="item-list">
					<div className="spin"><Spinner /></div>
				</div>
			)
		}

		const items = this.renderItems(this.state.itemList);

		return (
			<div className="item-list">
				{ items }
			</div>
		)
	}
}

export default ItemList