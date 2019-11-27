

const erin = new Trainer('Erin')
const brian = new Trainer('Brian')
const michel = new Trainer('Michel')


const trainers = [erin, brian, michel]


brian.addPokemon(createPokemon("noivern"))
brian.addPokemon(createPokemon("dragalge"))
brian.addPokemon(createPokemon("kommo-o"))

erin.addPokemon(createPokemon("dragonair"))
erin.addPokemon(createPokemon("reshiram"))
erin.addPokemon(createPokemon("altaria"))

michel.addPokemon(createPokemon("dragonair"))
michel.addPokemon(createPokemon("reshiram"))
michel.addPokemon(createPokemon("altaria"))

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