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