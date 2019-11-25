let brianGrid = document.getElementById('brian-grid')
let michelGrid = document.getElementById('michel-grid')
let erinGrid = document.getElementById('erin-grid')

let mainGrid = document.getElementById('main-grid')

brianGrid.addEventListener('click', () => {
    for(let i = 0; i < 80; i++) {
        setTimeout(() => {
            mainGrid.style.gridTemplateColumns = `${i}% 10% 10%`
        }, i)
    }
})

michelGrid.addEventListener('click', () => {
    for(let i = 0; i < 80; i++) {
        setTimeout(() => {
            mainGrid.style.gridTemplateColumns = `$10% ${i}% 10%`
        }, i)
    }
})

erinGrid.addEventListener('click', () => {
    for(let i = 0; i < 80; i++) {
        setTimeout(() => {
            mainGrid.style.gridTemplateColumns = `$10% 10% ${i}%`
        }, i)
    }
})