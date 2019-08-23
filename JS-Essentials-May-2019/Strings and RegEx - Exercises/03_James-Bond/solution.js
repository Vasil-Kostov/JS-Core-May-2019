function solve() {
    let inputArray = JSON.parse(document.getElementById("array").value);
    let result = document.getElementById("result");
    let key = inputArray[0];

    let pattern = new RegExp(`(?:^|\\s)(?:${key})\\s+([A-Z!%$#]{8,})(?:\.|,|\\s|$)`, "gi");

    for (let i = 1; i < inputArray.length; i++) {
        let currentString = inputArray[i];
        let match;
        
        while (match = pattern.exec(currentString)) {
            if(!(/[^A-Z!%$#]/.test(match[1]))) {
                let changedWord = decode(match[1]);
                currentString = currentString.replace(match[1], changedWord);
            };
        }

        let p = document.createElement("p");
        p.textContent = currentString;
        result.appendChild(p);
    }

    function decode(str) {
        str = str
            .split("")
            .map(s => s === "!" ? "1"
                : s === "%" ? "2"
                    : s === "#" ? "3"
                        : s === "$" ? "4"
                            : s.toLowerCase())
            .join("");            
        return str;
    }
}