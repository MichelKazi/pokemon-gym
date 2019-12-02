class Trainer {
  constructor(name) {
    this.name = name
    this.team = []
  }
  all() {
    return this.team
  }

  addPokemon(name) {
    
    return createPokemon(name).then(acquiredPokemon=>{
      const pokemon = queryPokemon(acquiredPokemon)
      this.team.push(pokemon)
      console.log(pokemon);
      
      return pokemon
    })
    
  }

  removePokemon(pokemon) {
    this.team = this.team.filter(p => p.id !== pokemon.id)

  }

}

class Pokemon {
  constructor() {
    this.name = ""
    this.description = ""

    this.id = 0

    this.weight = 0
    this.height = 0

    this.stats = {
      "hp": 0,
      "attack": 0,
      "defense": 0,
      "special-defense": 0,
      "special-attack": 0,
      "speed": 0
    }

    this.img = ""

    this.gif = ""

    this.abilities = []

    this.type = []

    this.color = ""
  }

  getColor() {
    return this.color
  }

  setColor(color) {
    this.color = color
  }

  //name
  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }

  //description
  getDescription() {
    return this.description
  }

  setDescription(description) {
    this.description = description
  }

  //weight
  getWeight() {
    return this.weight
  }

  setWeight(weight) {
    this.weight = weight
  }

  //height
  getHeight() {
    return this.height
  }

  setHeight(height) {
    this.height = height
  }


  //int
  getId() {
    return this.id
  }

  setId(id) {
    this.id = id
  }

  //stats
  getStats() {
    return this.stats
  }

  setAStat(stat, int) {
    this.stats[stat] = int
  }

  //img
  getImg() {
    return this.img
  }

  setImg(img) {
    this.img = img
  }

  //gif
  getGif() {
    return this.gif
  }

  setGif(gif) {
    this.gif = gif
  }

  //abilities
  getAbilities() {
    return this.abilities
  }

  setAbilities(ability) {
    this.abilities = ability
  }

  //types
  getTypes() {
    return this.types
  }

  setTypes(type) {
    this.types.push(type)
  }
}

async function createPokemon(pokemonName) {
  try {
    let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    let response = await request.json()
  
    
    return response

  } catch (err) {
    console.log(err);
  }
}

function queryPokemon(response) {
  const pokemon = new Pokemon()

  pokemon.setName(response["name"])

  pokemon.setId(response["id"])

  response.stats.map(resStat => pokemon.setAStat(resStat.stat.name, resStat.base_stat))


  pokemon.setHeight(response["height"])
  pokemon.setWeight(response["weight"])

  //pokemon img and gif
  if (response["id"] < 722) {
    pokemon.setGif(`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${response["name"]}.gif`)
    pokemon.setImg(response["sprites"]["front_default"])
  } else {
    pokemon.setImg(response["sprites"]["front_default"])
    pokemon.setGif(response["sprites"]["front_default"])
  }

  response.abilities.map(resAbilities => pokemon.abilities.push(resAbilities.ability.name))

  response.types.map(resTypes => resTypes.type.name)

  return pokemon
}
