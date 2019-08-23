function solve() {
   let playerOneDivElement = document.getElementById("player1Div");
   let playerTwoDivElement = document.getElementById("player2Div");
   let result = document.getElementById("result");
   let history = document.getElementById("history");

   addOnClickEvent(Array.from(playerOneDivElement.children));
   addOnClickEvent(Array.from(playerTwoDivElement.children));

   let firstPlayerCard;
   let firstPlayerCardPoints;
   let secondPlayerCard;
   let secondPlayerCardPoints;

   function addOnClickEvent(colectionOfCards) {
      for (const card of colectionOfCards) {
         card.addEventListener("click", (e) => {
            card["src"] = "./images/whiteCard.jpg";

            let points = Number(card["name"]);
            let parentElementId = card.parentElement.id;

            if (parentElementId === playerOneDivElement.id) {
               result.getElementsByTagName("span")[0].innerHTML = points;
               firstPlayerCard = card;
               firstPlayerCardPoints = points;
            } else {
               result.getElementsByTagName("span")[2].innerHTML = points;
               secondPlayerCard = card;
               secondPlayerCardPoints = points;
            }
                        
            if (firstPlayerCardPoints && secondPlayerCardPoints) {
               if (firstPlayerCardPoints > secondPlayerCardPoints) {
                  firstPlayerCard.style.border = "2px solid green";
                  secondPlayerCard.style.border = "2px solid red";
               } else {
                  firstPlayerCard.style.border = "2px solid red";
                  secondPlayerCard.style.border = "2px solid green";
               }
               
               history.textContent += `[${firstPlayerCardPoints} vs ${secondPlayerCardPoints}] `;

               result.getElementsByTagName("span")[0].innerHTML = "";
               result.getElementsByTagName("span")[2].innerHTML = "";
               
               firstPlayerCardPoints = 0;
               secondPlayerCardPoints = 0;
            }

         });
      }
   }
}