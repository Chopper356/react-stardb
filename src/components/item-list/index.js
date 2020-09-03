import React from "react"

const ItemList = (props) => {

	const { data, onItemSelected, children: renderLable } = props;

	const items = data.map((item) => {
		const { id } = item;

		const label = renderLable(item);

		return (
			<div key={ id } onClick={ () => onItemSelected(id) } className="item-name">	
				{ label }
			</div>
		)
	});

	return (
		<div className="item-list">
			{ items }
		</div>
	)
}

export default ItemList