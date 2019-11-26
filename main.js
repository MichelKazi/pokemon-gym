let erin = new Trainer('Erin')
let brian = new Trainer('Brian')
let michel = new Trainer('Michel')

let trainers = ["erin", "brian", "michel"]

erinPokemonList = ["altaria", "reshiram", "kingdra"]
brianPokemonList = ["noivern", "dragalge", "kommo-o"]
michelPokemonList = []


async function getPokemon(pokemonName) {
    try {   
        let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        let response = await request.json()
        console.log(response)
        createPokemon(response)

    } catch (err) {
        // error.innerHTML = "There was an error please try again."
    }
}

async function getPokemonDescription(url) {
    try {
        let request = await fetch(url)
        let response = await request.json()

        setDResponse(response)
    } catch (err) {
        // error.innerHTML = "There was an error please try again."
    }
}

function createPokemon(response) {
    pokemon = new Pokemon()

    pokemon.setName(response["name"])

    pokemon.setId(response["id"])

    for(let i = 0; i < 6; i++){
        pokemon.setAStat(response["stats"][i]["stat"]["name"], response["stats"][i]["base_stat"])
    }

    pokemon.setHeight(response["height"])
    pokemon.setWeight(response["weight"])

    //pokemon img and gif
    if(response["id"] < 722) {
        pokemon.setGif(`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${response["name"]}.gif`)
        pokemon.setImg(response["sprites"]["front_default"])
    } else {
        pokemon.setImg(response["sprites"]["front_default"])
        pokemon.setGif(response["sprites"]["front_default"])
    }

    //abilities
    for (let i = 0; i < response["abilities"].length; i++) {
        pokemon.abilities.push(response["abilities"][i]["ability"]["name"])
    }

    //types
    for (let i = 0; i < response["types"].length; i++) {
        pokemon.type.push(response["types"][i]["type"]["name"])
    }

    //description
    getPokemonDescription(response["species"]["url"])

}

function setDResponse(desc) {
    pokemon.setDescription(desc["genera"][2]["genus"])
    pokemon.setColor(desc["color"]["name"])

    // displayPokemon()
}


for (let i = 0; i < 3; i++) {
    getPokemon(erinPokemonList[i])
    erin.addPokemon(pokemon)
}