const heroElementID = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = 60
const heroDiceRoll = 6

const monsterElementID = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = 10
const monsterDiceRoll = 4;

function renderCharacter(elementid, name, avatar, health, diceroll){
    document.getElementById(elementid).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"><div class="dice"> ${diceroll} </div>
        </div>
    </div>        `
}

renderCharacter(heroElementID, heroName, heroAvatar, heroHealth, heroDiceRoll)
renderCharacter(monsterElementID, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)


