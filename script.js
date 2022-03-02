
const hero = {
    elementID :"hero",
    name : "Wizard",
    avatar : "images/wizard.png",
    health : 60,
    diceCount: 3
}

const monster = {
    elementID : "monster",
    name : "Orc",
    avatar : "images/orc.png",
    health : 10,
    diceCount: 1
}

function Character(data){
    this.elementID = data.elementID
    this.name = data.name
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
    this.getCharacterHtml = function(){
        const diceHTML = getDiceHTML(this.diceCount)  
        document.getElementById(this.elementID).innerHTML = `
        <div class="character-card">
        <h4 class="name"> ${this.name} </h4>
        <img class="avatar" src="${this.avatar}"/>
        <p class="health">health: <b> ${this.health} </b></p>
        <div class="dice-container">${diceHTML}
        </div>
    </div> `
    }
}

const wizard = new Character(hero)
const evilMonster = new Character(monster)

wizard.getCharacterHtml()
evilMonster.getCharacterHtml()

// function renderCharacter(data){
//     const {elementID, name, avatar, health, diceCount} = data
    
//     // v1
//     // map iterates through entire array performing function on each element, returns new array
//     // .join('') converts array to string with no spaces to delineate elements
//     //  const diceHTML = diceRoll.map(function(num){
//     //      return `<div class="dice">${num}</div>`
//     // }).join('')

//     const diceHTML = getDiceHTML(diceCount)


//     document.getElementById(elementID).innerHTML = `
//     <div class="character-card">
//         <h4 class="name"> ${name} </h4>
//         <img class="avatar" src="${avatar}"/>
//         <p class="health">health: <b> ${health} </b></p>
//         <div class="dice-container">${diceHTML}
//         </div>
//     </div>        `
// }

// renderCharacter(hero)
// renderCharacter(monster)

// return array of random numbers = length of diceCount
function getDiceRollArray(diceCount){
    
    // v2
    // create new array with length diceCount, autofill with zeros
    // for each element, generate random number simulating dice roll
    // save to array and return
    return new Array(diceCount).fill("0").map(function(num){
        return Math.floor(Math.random() * 6) +1
    })

    // v1
    // for(let i=0;i<diceCount;i++){
    //     // number between 1 and 6
    //     randomNumbers.push(Math.floor(Math.random() * 6) +1)
    // }
    console.log("Array of dice rolls: ", randomNumbers)
    return randomNumbers;
    
    

}

// v2
// call function that generates a random number for each roll and returns completed array for all rolls, then uses map to add html to array element, converts array to string, using join('') to remove commas
function getDiceHTML(diceCount){
return getDiceRollArray(diceCount).map(function(num){
    return `<div class="dice">${num}</div>
    `
}).join('')
}

