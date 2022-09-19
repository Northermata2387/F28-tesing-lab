
function returnTwo() {
    return(2)
}

function greeting(name) {
    name = `Hello, ${name}.`
}

function add(num1, num2) {
    return(num1 + num2)
}

function multiply(num1, num2) {
    return(num1 * num2)
}

function divide(num1, num2) {
    return(num1 / num2)
}

function subtract(num1, num2) {
    return(num1 - num2)
}


module.exports = {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
}