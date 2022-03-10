import characterData from './data.js'
import Character from './character.js'
import { getDiceRollArray } from './utils.js'

let monstersArray = ["orc", "demon", "goblin"]

// create characters
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

// render cards
function render(){
    // make sure attack button is visible
document.getElementById("attack-button").style.display = "block"
document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}
render()



// getNewMonster
function getNewMonster(){
    // characterData[orc]
    const nextMonsterData = characterData[monstersArray.shift()]
    // if nextMonsterData has data(1) return new Character else return empty
    return nextMonsterData? new Character(nextMonsterData) : {}
}




// setup attack button
document.getElementById("attack-button").addEventListener("click", attack)

function attack(){
    
    wizard.setDiceHTML()
    monster.setDiceHTML()
    // pass score of opponent
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.dead){
        console.log("Wizard is dead")
        setTimeout(endGame, 1500)
    }else if(monster.dead){
            console.log("Monster dead. Attempting new Monster")
            // hide attack button
            document.getElementById("attack-button").style.display = "none"
            if(monstersArray.length>0){
                console.log("Success")
            monster=getNewMonster()
            setTimeout(() =>render(), 1000)
        }else{
            console.log("Out of monsters. Ending game.")
            setTimeout(endGame, 1500)
        }
    }
    
}

function endGame(){
    // hide attack button
    document.getElementById("attack-button").style.display = "none"
    const endMessage = (wizard.dead && monster.dead) ? 'No victors - everyone dead'
    : (wizard.dead) ? `${monster.name} wins`
    : 'Wizard wins'

    const endEmoji = (wizard.health>0) ? '🔮'
    : (monster.health>0) ? '💀'
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

// ideas for improvement - 
// antimated dice
// change rules of the game. role x get health boost
// add more heroes




