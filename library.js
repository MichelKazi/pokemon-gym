export class Trainer {
    constructor(name) {
        this.name = name
        this.team = Array.size(3).fill(0)
        //binding this keyword for methods
        // this.all = this.all.bind(this)
        // this.addPokemon = this.addPokemon.bind(this)
        // this.get = this.get.bind(this)
        // this.equip = this.equip.bind(this)
    }

    all() {
        return this.team
    }

    addPokemon(pokemon) {
        if (this.team.length > 4) {
            return console.error(`${this.name}'s team is full!`);
        }
        if (!this.equipped) return this.equipped = pokemon
        else {

            this.team.push(pokemon)
        }

    }


    removePokemon(pokemon) {

        this.team = this.team.filter(p => p.id !== pokemon.id)

    }

}









class Pokemon {
    constructor () {
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
            "special-attack":0,
            "speed": 0
        }

        this.img = ""

        this.gif = ""

        this.abilities = []

        this.type =[]

        this.color = ""
    }

    getColor(){
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
    getImg(){
        return this.img
    }

    setImg(img) {
        this.img = img
    }

    //gif
    getGif(){
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

queryData = async (id) => {
    let response
    
    try {
        response = await axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(id) ? 'name/' : 'id/'}${id}.json`)
        const acquiredPokemon = response.data
        
        this.name = acquiredPokemon.name
        this.id = acquiredPokemon.id
        this.hp = acquiredPokemon.stats[5].base_stat// For every single Pokemon JSON, 
        this.attack = acquiredPokemon.stats[4].base_stat // these indices for stats will
        this.defense = acquiredPokemon.stats[3].base_stat // always be the same 
        this.weight = acquiredPokemon.weight
        this.spriteURL = acquiredPokemon.sprites.front_default
        
        this.abilities = acquiredPokemon.abilities.map(abilities => {
            return abilities.ability.name.replace('-', ' ')
        })
        
        return Promise.resolve(this)
    }
    catch (err) {
        console.error(err)
    }
    
}
export default library