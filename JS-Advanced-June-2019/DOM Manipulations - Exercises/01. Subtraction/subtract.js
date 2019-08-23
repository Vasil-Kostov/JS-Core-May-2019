function subtract() {
    const firstNumberEle = document.getElementById("firstNumber");
    const secondNumberEle = document.getElementById("secondNumber");

    firstNumberEle.disabled = false;
    secondNumberEle.disabled = false;

    const firstNumber = Number(firstNumberEle.value);
    const secondNumber = Number(secondNumberEle.value);
    const resultDivElement = document.getElementById("result");

    resultDivElement.textContent = firstNumber - secondNumber;
}