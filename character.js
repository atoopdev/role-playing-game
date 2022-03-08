import {getDicePlaceholderHtml, getDiceRollArray} from './utils.js'

function Character(data){
    // this.elementID = data.elementID
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)

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

        // const diceHTML = this.getDiceHTML(diceCount)  

        // document.getElementById(elementID).innerHTML = 
        return `
        <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceArray}
        </div>
    </div> `
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

} 

export default Character