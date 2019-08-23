function solve() {
  let text = document.getElementById("text").value;
  let result = document.getElementById("result");

  let wordFromNumbers = document.createElement("p");

  let tokens = text.split(" ");
  tokens.forEach(el => {
    let p = document.createElement("p");

    if (Number(el)) {
      wordFromNumbers.textContent += String.fromCharCode(Number(el));
    } else {
      let line = el.split("").map(ch => ch.charCodeAt(0)).join(" ");
      p.textContent = line;
      result.appendChild(p);
    }

  });

  result.appendChild(wordFromNumbers);
}