let num1 = 0;
let num2 = 0;
let operator = '';

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error! Cannot divide by zero.";
    }
    return  num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === 'x' || operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    } 

    return result;
}