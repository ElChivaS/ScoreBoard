import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'

function Character(data) {
    Object.assign(this, data)

    this.maxHealth = this.health

    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    
    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce( (total, num) => total + num )
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.isDead = true
            this.health = 0
            // disable attack button
            // create newGame button
        }
    }
    
    this.setDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map( num => `<div class="dice">${num}</div>` ).join('')
    }

    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth)        
        return `
                <div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" style="width: ${percent}%"></div>
                </div>`
    }

    this.getCharacterHtml = function () {
        const { elementID, name, avatar, health, diceCount, diceHtml, totalAttackScore } = this
        const healthBar = this.getHealthBarHtml()
        
        return `<div class='character-card'>
                    <h4 class="name">${name}</h4>
                    <img class='avatar' src='./assets/img/${avatar}' alt="a wizard on attack position" />
                    <p class="health">Health: <b>${health}</b> </p>
                    ${healthBar}
                    <div class="dice-container">
                        ${diceHtml}
                    </div>
                </div>`
    }
}

export default Character