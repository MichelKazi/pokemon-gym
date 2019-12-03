const erin = new Trainer('Erin')
const brian = new Trainer('Brian')
const michel = new Trainer('Michel')

const trainers = [erin, brian, michel]

getPokemonElements = (name) => {
  return {
    imgs: document.querySelectorAll(`.${name}-pokemon-imgs`),
    names: document.querySelectorAll(`.${name}-pokemon-name`),
  }
}

// querying the HTML elements where our pokemon names and images go
let brianDOMPokemon = getPokemonElements('brian')
let erinDOMPokemon = getPokemonElements('erin')
let michelDOMPokemon = getPokemonElements('michel')

const trainersInDOM = [erinDOMPokemon, brianDOMPokemon, michelDOMPokemon]

// making sure to wait for the promises to resolve 
Promise.all([
  brian.addPokemon("noivern"),
  brian.addPokemon("dragalge"),
  brian.addPokemon("tyrantrum"),

  erin.addPokemon("dragonair"),
  erin.addPokemon("reshiram"),
  erin.addPokemon("altaria"),

  michel.addPokemon("hydreigon"),
  michel.addPokemon("rayquaza"),
  michel.addPokemon("garchomp")])

  .then(() => {
   
    trainersInDOM[0].names.forEach((element, i) => {
      element.innerText = erin.team[i].name.toUpperCase()
    })
    trainersInDOM[0].imgs.forEach((element, i) => {
      element.src = erin.team[i].gif
    })
    
    trainersInDOM[1].names.forEach((element, i) => {
      element.innerText = brian.team[i].name.toUpperCase()
    })
    trainersInDOM[1].imgs.forEach((element, i) => {
      element.src = brian.team[i].gif
    })
    
    trainersInDOM[2].names.forEach((element, i) => {
      element.innerText = michel.team[i].name.toUpperCase()
    })
    trainersInDOM[2].imgs.forEach((element, i) => {
      element.src = michel.team[i].gif
    })
  })
  
trainers.forEach((trainer)=>{
  trainer.team.forEach((pokemon)=>{
    
  })
})
