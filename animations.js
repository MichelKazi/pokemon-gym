let brianGrid = document.getElementById('brian-grid')
let michelGrid = document.getElementById('michel-grid')
let erinGrid = document.getElementById('erin-grid')

let mainGrid = document.getElementById('main-grid')

let erinPokemonNames = document.getElementsByClassName('erin-pokemon-names')
let michelPokemonNames = document.getElementsByClassName('michel-pokemon-names')
let brianPokemonNames = document. getElementsByClassName('brian-pokemon-names')

// let erinPokemon1Name = document.getElementById('erin-pokemon-1-name')
// let michelPokemon1Name = document.getElementById('michel-pokemon-1-name')
// let brianPokemon1Name = document.getElementById('brian-pokemon-1-name')

let erinTeam = document.getElementById('erin-pokemon-party')
let michelTeam = document.getElementById('michel-pokemon-party')
let brianTeam = document.getElementById('brian-pokemon-party')

let michelSprite = document.getElementById('michel-sprite')
let erinSprite = document.getElementById('erin-sprite')
let brianSprite = document.getElementById('brian-sprite')

let erinPokemonStats = document.getElementsByClassName("erin-pokemon-stats")
let michelPokemonStats = document.getElementsByClassName("michel-pokemon-stats")
let brianPokemonStats = document.getElementsByClassName("brian-pokemon-stats")

let gymName = document.getElementById('gym-name')

michelGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `0.33% 99.33% 0.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `33.33% ${99 - i}.33% 33.33%`
            }, i * 5)
        }
<<<<<<< HEAD
        michelTeam.style.display = "none"
        michelSprite.style = "justify-self: center; margin-left: 0;"
        
=======

        michelPokemonStats[0].style.display = "none"
        michelPokemonStats[1].style.display = "none"
        michelPokemonStats[2].style.display = "none"
>>>>>>> refs/remotes/origin/master
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `0.33% 99.33% 0.33%`) {
                    mainGrid.style.gridTemplateColumns = `0.33% 99.33% 0.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${33 - i}.33% ${66 + i}.33% ${33 - i}.33%`
                    michelTeam.style.display = "grid"
                    michelSprite.style = "justify-self: left; margin-left: 5%;"
                }
            }, i * 5)
        }

        michelPokemonStats[0].style.display = "block"
        michelPokemonStats[1].style.display = "block"
        michelPokemonStats[2].style.display = "block"
    }
    console.log("you clicked on gym leader Michel")

})

brianGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `0.33% 0.33% 99.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `33.33% 33.33% ${99 - i}.33%`
            }, i * 5)
        }
<<<<<<< HEAD
        brianTeam.style.display = "none"
        brianSprite.style = "justify-self: center; margin-left: 0;"
=======

        brianPokemonStats[0].style.display = "none"
        brianPokemonStats[1].style.display = "none"
        brianPokemonStats[2].style.display = "none"
>>>>>>> refs/remotes/origin/master
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `0.33% 0.33% 99.33%`) {
                    mainGrid.style.gridTemplateColumns = `0.33% 0.33% 99.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${33 - i}.33% ${33 - i}.33% ${66 + i}.33%`
                    brianTeam.style.display = "grid"
                    brianSprite.style = "justify-self: left; margin-left: 5%;"
                }
            }, i * 5)
        }

        brianPokemonStats[0].style.display = "block"
        brianPokemonStats[1].style.display = "block"
        brianPokemonStats[2].style.display = "block"
    }
    console.log("you clicked on gym leader Brian")
})

erinGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `99.33% 0.33% 0.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `${99 - i}.33% 33.33% 33.33%`
            }, i * 5)
        }
<<<<<<< HEAD
        erinTeam.style.display = "none"
        erinSprite.style = "justify-self: center; margin-left: 0;"
=======

        erinPokemonStats[0].style.display = "none"
        erinPokemonStats[1].style.display = "none"
        erinPokemonStats[2].style.display = "none"

>>>>>>> refs/remotes/origin/master
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `99.33% 0.33% 0.33%`) {
                    mainGrid.style.gridTemplateColumns = `99.33% 0.33% 0.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${66 + i}.33% ${33 - i}.33% ${33 - i}.33%`
                    erinTeam.style.display = "grid"
                    // erinSprite.style = "justify-self: left; margin-left: 5%;"
                }
            }, i * 5)
        }

        erinPokemonStats[0].style.display = "block"
        erinPokemonStats[1].style.display = "block"
        erinPokemonStats[2].style.display = "block"

    }
    console.log("you clicked on gym leader Erin")
})

gymName.addEventListener("click", function(event) {
    if(mainGrid.style.marginTop != "12%") {
        for(let i = 0; i < 100; i++) {
        setTimeout(() => {
            mainGrid.style.marginTop = `${111 - i}%`
        }, i * 7)
        }
    }
  });