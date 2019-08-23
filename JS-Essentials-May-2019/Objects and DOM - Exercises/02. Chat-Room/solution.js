function solve() {
   let buttonElement = document.getElementById("send");
   let inputAreaElement = document.getElementById("chat_input");
   let chatDivElement = document.getElementById("chat_messages");

   buttonElement.addEventListener("click", () => {
      if(inputAreaElement.value !== "") {
         let newDiv = document
         .getElementsByClassName("my-message")[0]
         .cloneNode(true);

         newDiv.textContent = inputAreaElement.value;

         chatDivElement.appendChild(newDiv);
         inputAreaElement.value = "";
      }
   });
}