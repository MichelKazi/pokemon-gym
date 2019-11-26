

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

let brianFirst = document.getElementsByClassName('brian-first')
let brianSecond = document.getElementsByClassName('brian-second')
let brianThird = document.getElementsByClassName('brian-third')