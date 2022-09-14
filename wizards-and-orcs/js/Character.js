import { getDiceRollArray } from './utils.js'

export default function Character(data) {
    Object.assign(this, data)
    
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
