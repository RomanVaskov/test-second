export default class gotService {
    constructor() {
        this.__apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this.__apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, recived ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters() {
        return this.getResource(`/characters?page=5&pageSize=10`);
    }

    getCharacter(id) {
        return this.getResource(`/character/${id}`);
    }
}

console.log(gotService);