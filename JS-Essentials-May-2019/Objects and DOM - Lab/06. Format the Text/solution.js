function solve() {
  let content = document.getElementById("input").textContent;

  let senteces = content.split('. ').filter(s => s !== "");
  console.log(senteces);

  let outputElement = document.getElementById("output");

  for (let i = 0; i < senteces.length; i += 3) {
    let p = document.createElement('p');

    if (senteces[i]){
      p.textContent += senteces[i] + '. ';
    }
    if (senteces[i + 1]){
      p.textContent += senteces[i + 1] + '. ';
    }
    if (senteces[i + 2]){
      p.textContent += senteces[i + 2] + '. ';
    }
    outputElement.appendChild(p);
  }
}