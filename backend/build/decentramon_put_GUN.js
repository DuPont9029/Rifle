import Gun from 'gun';
const gun = Gun();

const delta = gun.get('pokemon');





function User(Username, Level, PokemonArray) {
    this.username = Username;
    this.level = Level;
    this.deck = PokemonArray || [];
    this.matches = MatchesArray || [];

}

class Pokemon {
    name;
    level;
    #attack = 0;
    #defence = 0;
    #hp = 0;

    constructor(PokeName, PokeLevel) {
        this.name = PokeName;
        this.level = PokeLevel;
        this.#SetAttributes();
    }

    async #SetAttributes() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + this.name);
            const data = await response.json();
            this.#attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
            this.#defence = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
            this.#hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        } catch (error) {
            console.error('Error:', error);
        }
    }


    get(what) {

        if (what.toLowerCase() == "attack") {
            return this.#attack;
        }
        else if (what.toLowerCase() == "defence") {
            return this.#defence;
        }
        else if (what.toLowerCase() == "hp") {
            return this.#hp
        }

    }
    
}


/*
const user1 = new User('User1', 1);
const user2 = new User('User2', 2);
*/


let users = [];