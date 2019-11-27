

const erin = new Trainer('Erin')
const brian = new Trainer('Brian')
const michel = new Trainer('Michel')


const trainers = [erin, brian, michel]


brian.addPokemon("noivern")
brian.addPokemon("dragalge")
brian.addPokemon("kommo-o")

erin.addPokemon("dragonair")
erin.addPokemon("reshiram")
erin.addPokemon("altaria")

michel.addPokemon("dragonair")
michel.addPokemon("reshiram")
michel.addPokemon("altaria")

getPokemonElements = (name) => {
    return [
        [...document.querySelectorAll(`.${name}-pokemon-imgs`)], 
        [...document.querySelectorAll(`.${name}-pokemon-name`)]
    ]
}

let brianDOMPokemon = getPokemonElements('brian')
let erinDOMPokemon = getPokemonElements('erin')
let michelDOMPokemon = getPokemonElements('michel')


brianDOMPokemon[1].forEach((element, i) => {
    element.innerText= brian.team[i].name
});