// how to use .join() - converts an array to a string

const cssClassesArray = ['btn', 'btn-primary', 'btn-active', 'btn-sidebar']

// pass in what you want to use as a seperator-can use '' if want to space
const cssClassesString = cssClassesArray.join(' ')
console.log(cssClassesString)

// array constructors
// aim - create an array of length ten - all elements undefined
// autofill with placeholder
// autogenerate html formatting for each element

const endOfLevelBosses = new Array(10).fill('🍄').map(function(mushroom){
    return `<div class="box">${mushroom}</div>
    `
}).join('')
console.log(endOfLevelBosses)
document.getElementById("mushrooms").innerHTML = endOfLevelBosses

// reduce() - can use to sum contents of an array. does other things too
const rainJanuaryByWeek = [ 10, 20, 0, 122 ]
// total = running total
// currentElement = element being worked on
// starts with element1 = total element2 = current element
const rainTotalJan = rainJanuaryByWeek.reduce(function(total, currentElement){
    // define what operation to use on array elements
    console.log(`total: ${total} + currentElement: ${currentElement}`)
    return total + currentElement
})

console.log(`Total rain in Jan: ${rainTotalJan}`)

// ------------------------------------------------------------

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const gradeTotals = grades.reduce(function(total, currentElement){
    return total + currentElement
})
console.log(`Grade totals: ${gradeTotals/grades.length}`)

// ----------------------------------------------------------------------

// ternary operator
// const exerciseTimeMins = 40

// // if exercise <30 output statement after ? else outout statement after :
// const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
//     : exerciseTimeMins < 60 ? 'Doing good!' 
//     : 'Excellent!'

// console.log(message)

const playerGuess = 3
const correctAnswer = 6

const message = (playerGuess === correctAnswer) ? 'Correct!'
: (playerGuess > correctAnswer)? 'too high!'
: 'too low!'
console.log(message)

// -------------------------------------------------------------------------
// arrow function

// amount is the function parameter, single params do not need (), if no param replace with () and if 2+ param - use ()
// const alertSpend = amount => {
//     return `Warning you just spent $${amount}!`
// }

// can also get rid of {} and return. now is a one line function
// {} and return needed if using more complex logic like if else
const alertSpend = amount => `Warning you just spent $${amount}!`

console.log(100)

const speedAlert = (speedLimit,speed) => {
    if(speed>speedLimit) {
        return `You are going ${speed}mph!`
    }
}
    console.log(speedAlert(30,60))

// --------------------------------------------------------------------------

    const distanceTraveledMiles = [267, 345, 234, 190, 299]

    // const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
    //     return Math.round(distance * 1.6)
    // })
    
    const distanceTraveledKm = distanceTraveledMiles.map((distance) => Math.round(distance * 1.6))

    console.log(distanceTraveledKm)

//-----------------------------------------------------------------
// setTimeOut()

const question = 'What is the capital of Peru?'
const answer = 'Lima!'

console.log(question)
// set 3sec delay before logging out answer
// setTimeout(()=> console.log(answer), 3000)

// can do this way as well
// setTimeout(function () {
//     console.log(answer)
// }, 3000)

// or
setTimeout(revealAnswer, 3000)

function revealAnswer() {
    console.log(answer)
}

// 1
console.log(`Once upon a time, a beautiful princess met a handsome prince.`) 
// 5
setTimeout(()=>console.log(`In the end, they lived happily ever after.`), 12000)
// 2
setTimeout(()=> console.log(`The princess's wicked stepmother put a curse on them before they could marry.`), 3000) 
// 4
setTimeout(()=>console.log(`They got married on a beautiful summer's day.`), 9000)
// 3
setTimeout(()=>console.log(`The prince found a friendly wizard to lift the curse.`), 6000)