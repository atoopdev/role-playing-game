
const hero = {
    elementID :"hero",
    name : "Wizard",
    avatar : "images/wizard.png",
    health : 60,
    diceRoll : [3,1,4],
    diceCount: 3
}

const monster = {
    elementID : "monster",
    name : "Orc",
    avatar : "images/orc.png",
    health : 10,
    diceRoll : [2],
    diceCount: 1
}


function renderCharacter(data){
    const {elementID, name, avatar, health, diceRoll, diceCount} = data
    

    // map iterates through entire array performing function on each element, returns new array
    // .join('') converts array to string with no spaces to delineate elements
     const diceHTML = diceRoll.map(function(num){
         return `<div class="dice">${num}</div>`
    }).join('')


    document.getElementById(elementID).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceHTML}
        </div>
    </div>        `
}

renderCharacter(hero)
renderCharacter(monster)

// return array of random numbers = length of diceCount
function getDiceRollArray(diceCount){
    // holds each dice roll value
    const randomNumbers = []

    for(let i=0;i<diceCount;i++){
        // number between 1 and 6
        randomNumbers.push(Math.floor(Math.random() * 6) +1)
    }
    console.log("Array of dice rolls: ", randomNumbers)
    return randomNumbers;
    
    

}

getDiceRollArray(3);