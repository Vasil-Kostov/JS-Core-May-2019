function solve() {
	let input = document.getElementById("input").value;
	let resultElement = document.getElementById("resultOutput");	

	let elementsToRemove = input
		.split("")
		.filter(c => c === "1")
		.length;
		
	while (elementsToRemove > 9) {
	elementsToRemove = elementsToRemove
		.toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
		}, 0);
	}

	input = input
		.slice(0 + elementsToRemove, input.length - elementsToRemove);

	let symbolsInBinary = [];
	for (let i = 0; i < input.length; i += 8) {
		symbolsInBinary
			.push(Number(input.substr(i, 8)));
	}

	let result = "";
	symbolsInBinary.map(s => result += String.fromCharCode(parseInt(s, 2)));

	resultElement.innerHTML = result
								.split("")
								.filter(s => s.match(/[A-Za-z ]/))
								.join("");
}