// DOM elements 
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.undo');
const deleteButton = document.querySelector('.clear')
const showResult = document.querySelector('.result');
const equalsButton = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const display = document.querySelector('#display');

// Summ a+b 
function add(a, b) {
    return a + b;
};

// Subtract a-b
function subtract(a, b) {
    return a - b;
};

// Multiply a*b 
function multiply(a, b) {
    return a * b;
};

// Divide a/b 
function divide(a, b) {
    if (b == 0) {
        display.textContent = ('You used 0');
    } else {
        return a / b;
    }
};

//operate function
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

//variables
let buttonValue = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
display.textContent = '';
let storedNumber = '';
//making the number buttons to work
numberButton.forEach((number) => {
    number.addEventListener('click', function () {
        buttonValue = number.value;
        storedNumber += number.value;
        display.textContent += buttonValue;
    })
});

//making the operator buttons to work
operatorButton.forEach((operator => {
    operator.addEventListener('click', function () {

        if (firstNumber && storedNumber) {
            displayResult();
        }
        // saving the first number
        firstNumber = storedNumber;
        // getting the operator that was clicked
        clickedOperator = operator.textContent;
        display.textContent = storedNumber + clickedOperator;
        storedNumber = '';
    })
}));

//delete button
deleteButton.addEventListener('click', function () {
    buttonValue = '';
    clickedOperator = '';
    firstNumber = '';
    result = '';
    display.textContent = '';
    storedNumber = '';
})

//undo button
clearButton.addEventListener('click', function () {
    let value = display.textContent;
    display.textContent = value.slice(0, value.length - 1);
    buttonValue = value.slice(0, value.length - 1);
    storedNumber = value.slice(0, value.length - 1);
})

 // decimal button
decimal.addEventListener('click' , function(){
    console.log(display.innerHTML);
    console.log(firstNumber);
    if ( firstNumber.indexOf('.') == -1 || storedNumber.indexOf('.') == -1){
     display.textContent += '.';
     storedNumber = display.textContent;
    }
  })

//equals button
equalsButton.addEventListener('click', function () {
    if(storedNumber && firstNumber){
    displayResult();
    storedNumber = result;
    firstNumber = '';
    } else {
        display.textContent = 'Error';
    }
});

//display function
function displayResult() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
    display.textContent = parseFloat(result.toFixed(3));
    storedNumber = parseFloat(result.toFixed(3));
}
