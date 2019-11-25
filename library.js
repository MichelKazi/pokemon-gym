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
export default Trainer

