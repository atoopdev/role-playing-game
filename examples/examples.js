// how to use .join() - converts an array to a string

const cssClassesArray = ['btn', 'btn-primary', 'btn-active', 'btn-sidebar']

// pass in what you want to use as a seperator-can use '' if want to space
const cssClassesString = cssClassesArray.join(' ')
console.log(cssClassesString)