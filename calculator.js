let num1 = 0;
let num2 = null;
let operator = null;
let displayValue = '';

const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const screen = document.getElementById('screen');



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Error!")
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



function setDisplayValue(event) {
    displayValue = displayValue + event.target.innerText;
    if (!operator) {
        num1 = Number(displayValue);
    } else {
        num2 = Number(displayValue);
    }
    screen.innerText = displayValue;
}

function setOperator(event) {
    operator = event.target.innerText;
    displayValue = '';
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (event) => {
            setDisplayValue(event);
      });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', (event) => {
            setOperator(event);
      });
});

equalsButton.addEventListener('click', (event) => {
    if (operator !== null && num2 !== null) {
        console.log('I fired!');
        num1 = operate(num1, operator, num2);
        screen.innerText = num1;
        displayValue = '';
        operator = null;
        num2 = null;
    }
});

clearButton.addEventListener('click', (event) => {
    num1 = 0;
    num2 = null;
    operator = null;
    displayValue = '';
    screen.innerText = '0';
});




