function solve() {
    let word = document.getElementById("word").value;
    let textArr = JSON.parse(document.getElementById("text").value);
    let resultElement = document.getElementById("result");
    let wordToReplace = textArr[0].split(" ")[2];
    let regex = new RegExp(wordToReplace, "gi");
    
    let result = textArr.map(str => str
        .replace(regex, word));

    result.forEach(el => {
        let p = document.createElement("p");
        p.textContent = el;
        resultElement.appendChild(p);
    });
}