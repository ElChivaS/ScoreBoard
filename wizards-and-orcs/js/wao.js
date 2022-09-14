const heroElementID = 'hero' 
const heroName = 'Wizard' 
const heroAvatar = 'wizard.png' 
const heroHealthCount = '60'
const heroDiceCount = 6

const monsterElementID = 'monster' 
const monsterName = 'Orc' 
const monsterAvatar = 'orc.png' 
const monsterHealthCount = '10'
const monsterDiceCount = 4

function renderCharacter(elementID, name, avatar, health, dice) {
    document.getElementById(elementID).innerHTML = `
        <div class='character-card'>
            <h4 class="name">${name}</h4>
            <img class='avatar' src='./assets/img/${avatar}' alt="a wizard on attack position">
            <p class="health">Health: <b>${health}</b> </p>
            <div class="dice-container">
                <div class="dice">${dice}</div>
            </div>
        </div>
        `
}

renderCharacter(
    heroElementID, 
    heroName, 
    heroAvatar, 
    heroHealthCount, 
    heroDiceCount
)
renderCharacter(
    monsterElementID, 
    monsterName, 
    monsterAvatar, 
    monsterHealthCount, 
    monsterDiceCount
)