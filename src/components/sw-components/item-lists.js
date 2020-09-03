import React from "react"

import ItemList from "../item-list/"
import { withData } from "../hoc-helpers/"
import SwapiService from "../../services/swapi-service"
import { render } from "@testing-library/react";

const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllStarships,
	getAllPlanets
} = swapiService

const withChildFunction = (Wrapped, fn) => {
	return (props) => {
		return (
			<Wrapped { ...props } >
				{fn}
			</Wrapped>
		)
	}
}

const renderName = ({ name }) => <span>{ name }</span>;

const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const StarshipList = withData(withChildFunction(ItemList, renderName), getAllStarships);

export {
	PlanetList,
	PersonList,
	StarshipList
}