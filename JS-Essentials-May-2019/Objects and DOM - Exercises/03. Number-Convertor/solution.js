function solve() {
    let toSelectorElement = document.getElementById("selectMenuTo");

    toSelectorElement.children[0].value = "binary";
    toSelectorElement.children[0].innerHTML = "Binary";
    let hexDecimal = toSelectorElement.children[0].cloneNode(true);
    hexDecimal.value = "hexadecimal"
    hexDecimal.textContent = "Hexadecimal";
    toSelectorElement.appendChild(hexDecimal);

    let buttonElement = document.getElementsByTagName("button")[0];

    buttonElement.addEventListener("click", () => {
        let decimalValue = Number(document.getElementById("input").value);
        let result;
        if (decimalValue) {
            if (toSelectorElement.value === "binary") {
                result = decimalValue.toString(2);
            } else {
                result = decimalValue.toString(16);
            }
            
            document.getElementById("result").value = result.toUpperCase();
        }
    });
}