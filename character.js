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
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>
            `
        }).join('')

        // this.diceArray = getDiceRollArray(diceCount).map(function(num){
        //     return `<div class="dice">${num}</div>
        //    `
        // }).join('')
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
        
        console.log(`${this.name} is damaged. ${attackScoreArray}`)
        
    }

} 

export default Character