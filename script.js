
const hero = {
    elementID :"hero",
    name : "Wizard",
    avatar : "images/wizard.png",
    health : 60,
    diceRoll : 6
}

// const {elementID, name, avatar, health, diceRoll} = hero

const monster = {
    elementID : "monster",
    name : "Orc",
    avatar : "images/orc.png",
    health : 10,
    diceRoll : 4
}
// const {elementID, name, avatar, health, diceRoll} = monster

function renderCharacter(data){
    document.getElementById(data.elementID).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${data.name} </h4>
        <img class="avatar" src="${data.avatar}"/>
        <p class="health">health: <b> ${data.health} </b></p>
        <div class="dice-container"><div class="dice"> ${data.diceRoll} </div>
        </div>
    </div>        `
}

renderCharacter(hero)
renderCharacter(monster)


