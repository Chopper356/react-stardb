import React from "react"

import ItemDetails, { Record } from "../item-details/"
import SwapiService from "../../services/swapi-service"

const swapiService = new SwapiService();

const {
	getPerson,
	getPlanet,
	getStarship,
	getPersonImage,
	getPlanetImage,
	getStarshipImage
} = swapiService;

const PlanetDetails = ({ itemId }) => {
	return (
		<ItemDetails getData={ getPlanet } itemId={itemId} getImageUrl={ getPlanetImage }>
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation Period" />
			<Record field="diameter" label="Diameter" />	
		</ItemDetails>
	)
};

const PersonDetails = ({ itemId }) => {
	return (
		<ItemDetails getData={ getPerson } itemId={itemId} getImageUrl={ getPersonImage }>
			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	)
};

const StarshipDetails = ({ itemId }) => {
	return (
		<ItemDetails getData={ getStarship } itemId={itemId} getImageUrl={ getStarshipImage }>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Cost" />	
		</ItemDetails>
	)
}

export {
	PlanetDetails,
	PersonDetails,
	StarshipDetails
}