import {getDicePlaceholderHtml, getDiceRollArray, getPercentage} from './utils.js'

class Character{
    constructor(data){
    // this.elementID = data.elementID
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)

    // set maxHealth to match initial health value
    this.maxHealth = this.health

        // sets placeholder dice before attack button clicked
    this.diceArrayHTML = getDicePlaceholderHtml(this.diceCount)
    }

    setDiceHTML(){
        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArrayHTML = this.currentDiceScore.map((num) =>
         `<div class="dice">${num}</div>
            `).join('')

        
    }

    getCharacterHtml(){
        const { elementID, name, avatar, health, diceCount,currentDiceScore, diceArrayHTML } = this;

        const healthBar = this.getHealthBarHtml()
        
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                
                <div class="dice-container">
                    ${diceArrayHTML}
                </div>
                ${healthBar}
            </div>`
    }

    takeDamage(attackScoreArray){

        // sum all dice rolls
        const totalAttackScore = attackScoreArray.reduce((total, roll) =>
        total + roll
    )
    this.health -= totalAttackScore

        // keep health score from going negative
        if(this.health<=0){
            this.health = 0
            this.dead = true
           
        }
       
        
    }

    getHealthBarHtml(){
        const percent =  getPercentage(this.maxHealth,this.health)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width: ${percent}%;">
            </div>
        </div>`
    }
} 

export default Character