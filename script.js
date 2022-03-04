import characterData from './data.js'
import Character from './character.js'

// create characters
const wizard = new Character(characterData.hero)
const evilMonster = new Character(characterData.monster)

// render cards
function render(data){
    const { elementID} = data;
document.getElementById(elementID).innerHTML = data. getCharacterHtml();
}

render(wizard)
render(evilMonster)

    






