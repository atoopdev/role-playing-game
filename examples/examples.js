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
