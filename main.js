const erin = new Trainer('Erin')
const brian = new Trainer('Brian')
const michel = new Trainer('Michel')

const trainers = [erin, brian, michel]

getPokemonElements = (name) => {
  return {
    imgs: document.querySelectorAll(`.${name}-pokemon-imgs`),
    names: document.querySelectorAll(`.${name}-pokemon-name`),
    stats: document.querySelectorAll(`.${name}-pokemon-stats`)
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
    michel.addPokemon("garchomp")
  ])

  .then(() => {

    trainersInDOM[0].names.forEach((element, i) => {
      element.innerText = erin.team[i].name
    })
    trainersInDOM[0].imgs.forEach((element, i) => {
      element.src = erin.team[i].gif
      element.className = "pokeSprite"
    })
    trainersInDOM[0].stats.forEach((element, i) => {
      element.innerHTML = 
      `<p class="pokeHp">Hp: ${erin.team[i].stats.hp}</p> 
       <p class="atk">Atk: ${erin.team[i].stats.attack}</p> 
       <p class="def">Def: ${erin.team[i].stats.defense}</p>`
    })




    trainersInDOM[1].names.forEach((element, i) => {
      element.innerText = brian.team[i].name
    })
    trainersInDOM[1].imgs.forEach((element, i) => {
      element.src = brian.team[i].gif
      element.className = "pokeSprite"
    })
    trainersInDOM[1].stats.forEach((element, i) => {
      element.innerHTML = 
      `<p class="pokeHp">Hp: ${brian.team[i].stats.hp}</p>
      <p class="atk">Atk: ${brian.team[i].stats.attack}</p> 
      <p class="def">Def: ${brian.team[i].stats.defense}</p>`
      })




    trainersInDOM[2].names.forEach((element, i) => {
      element.innerText = michel.team[i].name
    })
    trainersInDOM[2].imgs.forEach((element, i) => {
      element.src = michel.team[i].gif
      element.className = "pokeSprite"
    })
    trainersInDOM[2].stats.forEach((element, i) => {
      element.innerHTML = 
      `<p class="pokeHp">Hp: ${michel.team[i].stats.hp}</p>
       <p class="atk">Atk: ${michel.team[i].stats.attack}</p>
       <p class="def">Def: ${michel.team[i].stats.defense}</p>`
    })
  })