import characterData from './data.js'
import Character from './character.js'

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
    render()
}

    






