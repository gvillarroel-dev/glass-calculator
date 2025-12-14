let currentOperation = "";

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

currentOperation = "divide";
console.log(calculator(1, 2));
