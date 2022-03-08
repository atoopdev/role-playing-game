import {getDicePlaceholderHtml, getDiceRollArray, getPercentage} from './utils.js'

function Character(data){
    // this.elementID = data.elementID
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)

    // set maxHealth to match initial health value
    this.maxHealth = this.health

        // sets placeholder dice before attack button clicked
    this.diceArray = getDicePlaceholderHtml(this.diceCount)


    this.getDiceHTML = function(){
        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArray = this.currentDiceScore.map((num) =>
         `<div class="dice">${num}</div>
            `).join('')

        
    }

    this.getCharacterHtml = function(){
        const { elementID, name, avatar, health, diceCount,currentDiceScore, diceArray } = this;

        const healthBar = this.getHealthBarHtml()
        console.log("healthBar: ", healthBar)

        // const diceHTML = this.getDiceHTML(diceCount)  

        // document.getElementById(elementID).innerHTML = 
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                
                <div class="dice-container">
                    ${this.diceArray}
                </div>
                ${healthBar}
            </div>`
    }

    this.takeDamage = function(attackScoreArray){

        // sum all dice rolls
        const totalAttackScore = attackScoreArray.reduce((total, roll) =>
        total + roll
    )

        // keep health score from going negative
        if(this.health<totalAttackScore){
            this.health = 0
            this.dead = true
           
        }else{
            this.health -= totalAttackScore
        }
       
        
    }

    this.getHealthBarHtml = function(){
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