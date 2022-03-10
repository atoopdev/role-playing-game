// return array of random numbers = length of diceCount
function getDiceRollArray(diceCount){
    
    // v2
    // create new array with length diceCount, autofill with zeros
    // for each element, generate random number simulating dice roll
    // save to array and return
    return new Array(diceCount).fill("0").map(() => 
    Math.floor(Math.random() * 6) +1)

    // v1
    // for(let i=0;i<diceCount;i++){
    //     // number between 1 and 6
    //     randomNumbers.push(Math.floor(Math.random() * 6) +1)
    // }
    
    

}

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill("0").map(() =>
        `<div class="placeholder-dice"></div>`
    ).join('')
}

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}

const getPercentage = (maximumHealth, remainingHealth) => 
(100 * remainingHealth)/maximumHealth