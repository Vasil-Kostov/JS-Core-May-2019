function solve() {
  let answerElements = Array.from(document.getElementsByClassName("answer-text"));
  console.log(answerElements);
  let sectionElements = document.getElementsByTagName("section");
  console.log(sectionElements);
  let resultElement = document.getElementsByClassName("results-inner");
  console.log(resultElement);
  let currentQuestin = 1;
  let points = 0;

  for (let answer of answerElements) {
    answer.addEventListener("click", () => {
      if (currentQuestin === 1) {
        if (answer.textContent === "onclick") {
          points++;
        }
        sectionElements[0].style.display = "none";
        sectionElements[1].style.display = "block";
        currentQuestin++;
      } else if (currentQuestin === 2) {
        if (answer.textContent === "JSON.stringify()") {
          points++;
        }
        sectionElements[1].style.display = "none";
        sectionElements[2].style.display = "block";
        currentQuestin++;
      } else {
        sectionElements[2].style.display = "none";
        if (answer.textContent === "A programming API for HTML and XML documents") {
          points++;
        }

        if (points === 3) {
          resultElement.item(0).getElementsByTagName("h1")[0].textContent = "You are recognized as top JavaScript fan!";

        } else {
          resultElement.item(0).getElementsByTagName("h1")[0].textContent = `You have ${points} right answers`;
        }
        document.getElementById("results").style.display = "block";
      }
    });
  }
}