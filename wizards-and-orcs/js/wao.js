const hero = {
    elementID: "hero",
    name: "Wizard", 
    avatar: "wizard.png",
    health: "60",
    diceRoll: [3, 1, 4],
    diceCount: 3
}

const monster = {
    elementID: "monster",
    name: "Orc", 
    avatar: "orc.png",
    health: "10",
    diceRoll: [2],
    diceCount: 1
}


function renderCharacter(data) {
    const { elementID, name, avatar, health, diceRoll, diceCount } = data
    
    let diceHtml = ""
    
    for (let i = 0; i < diceRoll.length; i++) {
        diceHtml += `<div class="dice">${diceRoll[i]}</div>`
        console.log(diceHtml)
    }
    
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
}

renderCharacter(hero)
renderCharacter(monster)
