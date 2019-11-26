let brianGrid = document.getElementById('brian-grid')
let michelGrid = document.getElementById('michel-grid')
let erinGrid = document.getElementById('erin-grid')

let mainGrid = document.getElementById('main-grid')

michelGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `1.33% 99.33% 1.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `33.33% ${99 - i}.33% 33.33%`
            }, i * 2)
        }
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `1.33% 99.33% 1.33%`) {
                    mainGrid.style.gridTemplateColumns = `1.33% 99.33% 1.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${34 - i}.33% ${66 + i}.33% ${34 - i}.33%`
                }
            }, i * 2)
        }
    }
    console.log("you clicked on gym leader Michel")

})

brianGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `1.33% 1.33% 99.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `33.33% 33.33% ${99 - i}.33%`
            }, i * 2)
        }
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `1.33% 1.33% 99.33%`) {
                    mainGrid.style.gridTemplateColumns = `1.33% 1.33% 99.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${34 - i}.33% ${34 - i}.33% ${66 + i}.33%`
                }
            }, i * 2)
        }
    }
    console.log("you clicked on gym leader Brian")
})

erinGrid.addEventListener('click', () => {
    if (mainGrid.style.gridTemplateColumns === `99.33% 1.33% 1.33%`) {
        for(let i = 0; i < 67; i++) {
            setTimeout(() => {
                mainGrid.style.gridTemplateColumns = `${99 - i}.33% 33.33% 33.33%`
            }, i * 2)
        }
    } else {
        for(let i = 0; i < 34; i++) {
            setTimeout(() => {
                if (mainGrid.style.gridTemplateColumns === `99.33% 1.33% 1.33%`) {
                    mainGrid.style.gridTemplateColumns = `99.33% 1.33% 1.33%`
                } else {
                    mainGrid.style.gridTemplateColumns = `${66 + i}.33% ${34 - i}.33% ${34 - i}.33%`
                }
            }, i * 2)
        }
    }
    console.log("you clicked on gym leader Erin")
})