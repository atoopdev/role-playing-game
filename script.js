import characterData from './data.js'
import Character from './character.js'
import { getDiceRollArray } from './utils.js'

// create characters
const wizard = new Character(characterData.hero)
const evilMonster = new Character(characterData.monster)

// render cards
function render(){
document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
document.getElementById('monster').innerHTML = evilMonster.getCharacterHtml();
}
render()

// setup attack button
document.getElementById("attack-button").addEventListener("click", attack)

function attack(){
    
    wizard.getDiceHTML()
    evilMonster.getDiceHTML()
    // pass score of opponent
    wizard.takeDamage(evilMonster.currentDiceScore)
    evilMonster.takeDamage(wizard.currentDiceScore)
    render()
    if((wizard.dead) || (evilMonster.dead)){
        endGame()
    }
    
}

function endGame(){
    const endMessage = (wizard.dead && evilMonster.dead) ? 'No victors - everyone dead'
    : (wizard.dead) ? 'Orc wins'
    : 'Wizard wins'

    const endEmoji = (wizard.health>0) ? '🔮'
    : (evilMonster.health>0) ? '💀'
    : "💀 💀"
    
    // replaces content of entire body
    document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>
    `
} 






