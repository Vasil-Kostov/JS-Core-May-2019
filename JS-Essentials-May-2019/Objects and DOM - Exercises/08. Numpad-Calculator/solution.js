function solve() {
    let buttonElements = Array.from(document.getElementsByTagName("button"));
    let expressionOutElement = document.getElementById("expressionOutput");
    let resultOutElement = document.getElementById("resultOutput");
    let operators = ["+", "-", "*", "/"];

    for (const button of buttonElements) {
        button.addEventListener("click", () => {
            if (button.value !== "=" && button.value !== "Clear") {
                if (operators.includes(button.value)) {
                    expressionOutElement.textContent += ` ${button.value} `;
                } else {
                    expressionOutElement.textContent += button.value;
                }
            } else if (button.value === "Clear") {
                expressionOutElement.textContent = "";
                resultOutElement.textContent = "";
            } else {
                let tokens = expressionOutElement.textContent.split(" ");
                let result;

                if (tokens.includes("")) {
                    resultOutElement.textContent = NaN;
                } else {
                    switch (tokens[1]) {
                        case "+": result = Number(tokens[0]) + Number(tokens[2]); break;
                        case "-": result = Number(tokens[0]) - Number(tokens[2]); break;
                        case "*": result = Number(tokens[0]) * Number(tokens[2]); break;
                        case "/": result = Number(tokens[0]) / Number(tokens[2]); break;
                    }
                    resultOutElement.textContent = result;
                }
            }

        });
    }
}