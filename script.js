
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
    let diceHTML = ""

    for (let i=0; i<diceCount; i++){
        diceHTML += `<div class="dice">${diceRoll[i]}</div>`
    }

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


