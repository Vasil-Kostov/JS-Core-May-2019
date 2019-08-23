function solve() {
   let searchFieldElement = document.getElementById("searchField");
   let searchButtonElement = document.getElementById("searchBtn");

   searchButtonElement.addEventListener("click", () => {
      let tableElements = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

      let textToCheckFor = searchFieldElement.value;
      console.log(textToCheckFor);

      for (const row of tableElements) {
         row.removeAttribute("class");
         if (row.textContent.includes(textToCheckFor)) {
            row.className = "select";
         }
      }

      searchFieldElement.value = "";
   });
}