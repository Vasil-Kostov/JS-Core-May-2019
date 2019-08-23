function create(words) {
   const divElement = document.getElementById("content");
   divElement.addEventListener('click', (e) =>
      e.target.firstChild.style.display = 'block');

   const templatePElement = document.createElement("p");

   const templateDivElement = document.createElement("div");
   templatePElement.style.display = "none";

   for (const word of words) {
      const p = templatePElement.cloneNode(true);
      p.textContent = word;
      const div = templateDivElement.cloneNode(true);
      div.appendChild(p);

      divElement.appendChild(div);
   }
}