// goal - return a function within a function

function getLottoNumbers(){
    const winningNums = []
    for (let i = 0; i < 6; i++){
        winningNums.push(Math.round(Math.random()*100))
    }
    return winningNums
}

// function in a function
// .join('') removes extraneous commas between elements
function getWinningNumbersHTML(){
    return getLottoNumbers().map(function(num){
        return `<div class="number">${num}</div>`
    }).join('');
}

// console.log(getWinningNumbersHTML())

document.getElementById('winning-numbers').innerHTML = getWinningNumbersHTML()