const erin = new Trainer('Erin')
const brian = new Trainer('Brian')
const michel = new Trainer('Michel')

const trainers = [erin, brian, michel]

getPokemonElements = (name) => {
  return {
    imgs: document.querySelectorAll(`.${name}-pokemon-imgs`),
    names: document.querySelectorAll(`.${name}-pokemon-name`)
  }
}


// querying the HTML elements where our pokemon names and images go
let brianDOMPokemon = getPokemonElements('brian')
let erinDOMPokemon = getPokemonElements('erin')
let michelDOMPokemon = getPokemonElements('michel')

const trainersInDOM = [brianDOMPokemon, erinDOMPokemon, michelDOMPokemon]

// making sure to wait for the promises to resolve 

Promise.all([

  brian.addPokemon("noivern"),
  brian.addPokemon("dragalge"),
  brian.addPokemon("kommo-o"),

  erin.addPokemon("dragonair"),
  erin.addPokemon("reshiram"),
  erin.addPokemon("altaria"),

  michel.addPokemon("hydreigon"),
  michel.addPokemon("rayquaza"),
  michel.addPokemon("guzzlord")])

  .then(() => {
    for (i in trainersInDOM) {
      trainersInDOM[i].names.forEach((element, i) => {
        element.innerText = brian.team[i].name
      })
      trainersInDOM[i].imgs.forEach((element, i) => {
