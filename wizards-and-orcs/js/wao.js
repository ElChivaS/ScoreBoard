const hero = {
    elementID: "hero",
    name: "Wizard", 
    avatar: "wizard.png",
    health: "60",
    // diceRoll: [3, 1, 4],
    diceCount: 3
}

const monster = {
    elementID: "monster",
    name: "Orc", 
    avatar: "orc.png",
    health: "10",
    // diceRoll: [2],
    diceCount: 1
}

function getDiceRollArray(diceCount) {
    // let newDiceRoll = []
    // for (let i = 0; i < diceCount; i++) {
    //     newDiceRoll.push(Math.round(Math.random() * 6) + 1)
    // }
    // return newDiceRoll
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
}
// ADDED THIS TOO AS A CONSTRUCTOR METHOD
/*function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`
    }).join("")
}*/

// CONSTRUCTOR
function Character(data) {
    // ELIMINATE THIS BLOCK OF CODE TO MAKE 'Object.assign'
    // this.elementID = data.elementID
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)
    
    // NEW getDiceHtml CONSTRUCTOR METHOD
    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join("")
    }

    this.getCharacterHtml = function () {
        const { elementID, name, avatar, health, diceCount } = this
        const diceHtml = this.getDiceHtml(diceCount) // ADD this TO THE METHOD CODE
        
        return `<div class='character-card'>
                    <h4 class="name">${name}</h4>
                    <img class='avatar' src='./assets/img/${avatar}' alt="a wizard on attack position" />
                    <p class="health">Health: <b>${health}</b> </p>
                    <div class="dice-container">
                        ${diceHtml}
                    </div>
                </div>`
    }
}

// CREATE CHARACTERS AS INSTANCES OF THE CLASS 'Character'
const wizard = new Character(hero)
// wizard.getCharacterHtml()
//document.getElementById(wizard.elementID).innerHTML = wizard.getCharacterHtml() // INTO A FUNCTION render()

const orc = new Character(monster)
// orc.getCharacterHtml()
//document.getElementById(orc.elementID).innerHTML = orc.getCharacterHtml() // INTO A FUNCTION render()


function render() {
    document.getElementById(wizard.elementID).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementID).innerHTML = orc.getCharacterHtml()
}
render()

/* ELIMINATED TO CREATE AS A METHOD IN THE CONSTRUCTOR CLASS 'Character'
function renderCharacter(data) {
    const { elementID, name, avatar, health, diceCount } = data
    const diceHtml = getDiceHtml(diceCount)
    
    document.getElementById(elementID).innerHTML = `
        <div class='character-card'>
            <h4 class="name">${name}</h4>
            <img class='avatar' src='./assets/img/${avatar}' alt="a wizard on attack position" />
            <p class="health">Health: <b>${health}</b> </p>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>
    `
}*/
/*
function getDiceRollArray(diceCount) {
    const arr = []

    for (let i = 0; i < diceCount; i++) {
        arr.push(Math.floor(Math.random() * 6) + 1)
    }
    return arr
}*/

/* ELIMINATED THE CALL SINCE NOW THEY'RE INSTANCES OF THE CLASS 'Character'
renderCharacter(hero)
renderCharacter(monster)
*/