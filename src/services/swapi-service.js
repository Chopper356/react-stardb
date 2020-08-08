export default class SwapiSerwice {

	_apiBase = "https://swapi.dev/api";

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
	
		return await res.json();
	}

	getAllPeople() {
		return this.getResource(`/people/`);
	}

	async getPerson(id) {
		const res = await this.getResource(`/people/${id}/`);
		return res.results;
	}

	getAllPlanets() {
		return this.getResource(`/planets/`);
	}

	async getPlanet(id) {
		const res = await this.getResource(`/planets/${id}/`);
		return res.results;
	}

	getAllStarships() {
		return this.getResource(`/starships/`);
	}

	async getStarship(id) {
		const res = await this.getResource(`/starships/${id}/`);
		return res.results;
	}

}

const swapi = new SwapiSerwice();

swapi.getAllStarships().then((el) => {
	console.log(el.results)
});

