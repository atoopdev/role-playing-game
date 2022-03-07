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

// reduce() - sums contents of an array
const rainJanuaryByWeek = [ 10, 20, 0, 122 ]
// total = running total
// currentElement = element being worked on
// starts with element1 = total element2 = current element
const rainTotalJan = rainJanuaryByWeek.reduce(function(total, currentElement){
    // define what operation to use on array elements
    return total + currentElement
})