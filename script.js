const numbers = document.querySelectorAll("button[data-number]");
const operations = document.querySelectorAll("button[data-operation]");
const output = document.querySelector("#output");
const result_btn = document.querySelector("#result");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
let calculator = {
    firstNumber: '',
    secondNumber: '',
    action: '',
}

clear.addEventListener('click', () => {
    calculator.firstNumber = '';
    calculator.secondNumber = '';
    calculator.action = '';
    output.innerText = '';
})

backspace.addEventListener('click', () => {
    if (output.innerText!=='') {
        output.innerText = output.innerText.slice(0, -1);
        calculator.firstNumber = Number(output.innerText);
    }
})
console.log(calculator.firstNumber)
console.log(calculator.firstNumber)
numbers.forEach(number_btn => {
    number_btn.addEventListener('click', () => {
        if (!((number_btn.dataset.number.toString() == '.') && output.innerText.includes(".")) && output.innerText.length < 14){
            output.innerText += number_btn.dataset.number;
        }
        calculator.firstNumber = Number(output.innerText);
    });
});


operations.forEach(operation_btn => {
    operation_btn.addEventListener('click', () => {
        if (calculator.firstNumber === '') {
            calculator.firstNumber = Number(output.innerText);
        } else {
            calculator.secondNumber = Number(output.innerText);
        }

        calculator.action = operation_btn.dataset.operation;
        if ((operation_btn.dataset.operation == 'pow') || (operation_btn.dataset.operation == 'pow3') || (operation_btn.dataset.operation == 'sqrt') || (operation_btn.dataset.operation == 'factorial') || (operation_btn.dataset.operation == 'sin') || (operation_btn.dataset.operation == 'cos') || (operation_btn.dataset.operation == 'tan')) {
            result_btn.click();
        } else {
            output.innerText = '';
        }
    })
})

result_btn.addEventListener("click", () => {
    switch(calculator.action) {
        case "+":
            calculator.firstNumber = calculator.firstNumber + calculator.secondNumber;
            break;
        case "-":
            calculator.firstNumber = calculator.secondNumber - calculator.firstNumber;
            break;
        case "*":
            calculator.firstNumber = calculator.firstNumber * calculator.secondNumber;
            break;
        case "/":
            calculator.firstNumber =  calculator.secondNumber / calculator.firstNumber ;
            break;
        case "pow":
            calculator.firstNumber = Math.pow(calculator.firstNumber, 2);
            break;
        case "pow3":
            calculator.firstNumber = Math.pow(calculator.firstNumber, 3);
            break;
        case "sqrt":
            calculator.firstNumber = Math.sqrt(calculator.firstNumber);
            break;
        case "factorial":
            for (let i = calculator.firstNumber; i > 1; i--) { 
                calculator.firstNumber = calculator.firstNumber * (i-1); 
            }
            break;
        case "sin":
            calculator.firstNumber = Math.sin(calculator.firstNumber * Math.PI/180);
            break;
        case "cos":
            calculator.firstNumber = Math.cos(calculator.firstNumber * Math.PI/180);
            break;
        case "tan":
            calculator.firstNumber = Math.tan(calculator.firstNumber * Math.PI/180);
            break;
    }
    if (Math.abs(calculator.firstNumber).toString().length > 9) {
        output.innerText = calculator.firstNumber.toExponential(7);
    } else {
        output.innerText = calculator.firstNumber;
    }
})

