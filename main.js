

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

let brianDOMPokemon = getPokemonElements('brian')
let erinDOMPokemon = getPokemonElements('erin')
let michelDOMPokemon = getPokemonElements('michel')

Promise.all([
    brian.addPokemon("noivern"),
    brian.addPokemon("dragalge"),
    brian.addPokemon("kommo-o"),
    
    erin.addPokemon("dragonair"),
    erin.addPokemon("reshiram"),
    erin.addPokemon("altaria"),

    michel.addPokemon("dragonair"),
    michel.addPokemon("reshiram"),
    michel.addPokemon("altaria")
])

.then( ()=> {
    brianDOMPokemon.names.forEach((element, i) => {  
        element.innerText= brian.team[i].name
    })
    brianDOMPokemon.imgs.forEach((element, i) => {
        element.src = brian.team[i].img
    })
    erinDOMPokemon.names.forEach((element, i) => {  
        element.innerText= erin.team[i].name
    })
    erinDOMPokemon.imgs.forEach((element, i) => {
        element.src = erin.team[i].img
    })
    michelDOMPokemon.names.forEach((element, i) => {  
        element.innerText= michel.team[i].name
    })
    michelDOMPokemon.imgs.forEach((element, i) => {
        element.src = michel.team[i].img
    })

    }
    )

    
