import {getDiceRollArray} from './utils.js'

function Character(data){
    // this.elementID = data.elementID
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)

    this.getDiceHTML = function(diceCount){
        
        return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>
            `
        }).join('')
    }

    this.getCharacterHtml = function(){
        const { elementID, name, avatar, health, diceCount } = this;

        const diceHTML = this.getDiceHTML(diceCount)  

        // document.getElementById(elementID).innerHTML = 
        return `
        <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceHTML}
        </div>
    </div> `
    }
}

export default Character