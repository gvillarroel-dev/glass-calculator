const displayOperation = document.querySelector(".calculator__operation");
const displayInput = document.querySelector(".calculator__input");
const buttons = document.querySelectorAll("button");

let currentOperation = "+";
let firstNumber = "";
let secondNumber = "";
let currentInput = "";

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const value = e.target.value;

		if ((value >= "0" && value <= "9") || value === ".") {
			handleNumber(value);
		} else if (button.classList.contains("calculator__button--operator")) {
			handleOperator(value);
		} else if (button.classList.contains("calculator__button--equal")) {
			console.log("equals");
		} else if (button.classList.contains("calculator__button--clear")) {
			console.log("clear");
		} else if (button.classList.contains("calculator__button--delete")) {
			console.log("delete");
		}
	});
});

const getSymbol = (operation) => {
	const symbols = {
		add: "+",
		substract: "-",
		multiply: "x",
		divide: "÷",
	};
	return symbols[operation];
};

const handleNumber = (number) => {
	if (number === "." && currentInput.includes(".")) return;
	if (currentInput === "0" && number === "0") return;

	if (currentInput === "0" && number !== ".") {
		currentInput = number;
	} else {
		currentInput += number;
	}

	updateDisplay();
};

const updateDisplay = () => {
	displayInput.textContent = currentInput || "0";

	if (firstNumber && currentOperation) {
		displayOperation.textContent = `${firstNumber} ${getSymbol(
			currentOperation
		)}`;
	} else {
		displayOperation.textContent = "";
	}
};

const handleOperator = (operator) => {
	if (currentInput === "") return;

	if (firstNumber && currentOperation) {
		secondNumber = currentInput;
		firstNumber = String(
			calculator(Number(firstNumber), Number(secondNumber))
		);
		currentInput = "";
	} else {
		firstNumber = currentInput;
		currentInput = "";
	}

	currentOperation = operator;
	updateDisplay();
};

const add = (number1, number2) => {
	return number1 + number2;
};

const substract = (minuend, subtracting) => {
	return minuend - subtracting;
};

const multiply = (multiplying, multiplier) => {
	return multiplying * multiplier;
};

const divide = (dividend, divider) => {
	return dividend / divider;
};

const calculator = (number1, number2) => {
	switch (currentOperation) {
		case "add":
			return add(number1, number2);
		case "substract":
			return substract(number1, number2);
		case "multiply":
			return multiply(number1, number2);
		case "divide":
			return number2 === 0
				? "ERROR: zero division invalid"
				: divide(number1, number2);
	}
};
