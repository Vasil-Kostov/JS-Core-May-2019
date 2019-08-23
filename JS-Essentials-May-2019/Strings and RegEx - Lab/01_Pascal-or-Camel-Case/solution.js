function solve() {
  let text = document.getElementById("text").value;
  let requaredTextCase = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");

  let p = document.createElement("p");
  let words = text.toLowerCase().split(" ").filter(x => x !== "");
  words = words.map(w => w.charAt(0).toUpperCase() + w.slice(1, w.length).toLowerCase());

  if (requaredTextCase === "Camel Case") {
    words[0] = words[0].toLowerCase();
    p.textContent = words.join("");
  } else if (requaredTextCase === "Pascal Case") {
    p.textContent = words.join("");
  } else {
    p.textContent = "Error!";
  }
  resultElement.appendChild(p);
}