let brianGrid = document.getElementById('brian-grid')
let michelGrid = document.getElementById('michel-grid')
let erinGrid = document.getElementById('erin-grid')

let mainGrid = document.getElementById('main-grid')

let erinPokemon1Name = document.getElementById('erin-pokemon-1-name')
let michelPokemon1Name = document.getElementById('erin-pokemon-1-name')
let erinPokemon1Name = document.getElementById('erin-pokemon-1-name')


michelGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `0.33% 99.33% 0.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `33.33% ${99 - i}.33% 33.33%`
            }, i * 5)
        }
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `.33% 99.33% .33%`) {
                    mainGrid.style.gridTemplateColumns = `.33% 99.33% .33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${33 - i}.33% ${66 + i}.33% ${33 - i}.33%`
                }
            }, i * 5)
        }
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
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `.33% .33% 99.33%`) {
                    mainGrid.style.gridTemplateColumns = `.33% .33% 99.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${33 - i}.33% ${33 - i}.33% ${66 + i}.33%`
                }
            }, i * 5)
        }
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
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `99.33% .33% .33%`) {
                    mainGrid.style.gridTemplateColumns = `99.33% .33% .33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${66 + i}.33% ${33 - i}.33% ${33 - i}.33%`
                }
            }, i * 5)
        }
    }
    console.log("you clicked on gym leader Erin")
})