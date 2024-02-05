function User(Username, Level, PokemonArray) {
    this.username = Username;
    this.level = Level;
    this.deck = PokemonArray || [];
    this.matches = MatchesArray || [];

}


function Pokemon(PokeName) {
    this.name = PokeName.toLowerCase();
    let image = undefined;
    let attack = undefined;
    let defence = undefined;
    let hp = undefined;

    var self = this;


    this.get = function(what) {

        what = what.toString().toLowerCase();

        if (what === "attack") {
            return attack;
        } else if (what.toLowerCase() === "defence") {
            return defence;
        } else if (what === "hp") {
            return hp;
        } else if (what === "image" ) {
            return image;
        }
    };

   
    


    return new Promise((resolve, reject) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.name)
            .then(response => response.json())
            .then(data => {
                attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
                defence = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
                hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
                image = data.sprites.front_default;
                resolve(self);
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
}


const deck = [
    new Pokemon("pikachu"),
    new Pokemon("mewtwo"),
]


Promise.all(deck).then(pokemons => {
    pokemons.forEach((poke, i) => {
        const final = {
            name: poke.name,
            attack: poke.get('attack'),
            defence: poke.get('defence'),
            hp: poke.get('hp'),
            image: poke.get('image')
        };

        deck[i] = final;
        
    });

    //! your main
    console.log(deck, "deck")

    //* KovD3v please test this in test network
    //todo: let users = [new User("DuPont9029", 0, deck)];    

}).catch(error => {
    console.error('Error:', error);
});