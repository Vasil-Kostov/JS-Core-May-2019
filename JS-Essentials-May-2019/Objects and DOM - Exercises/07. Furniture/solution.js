function solve() {
  let textAreaElements = document.getElementsByTagName("textarea");
  let buttonsElements = document.getElementsByTagName("button");
  let tbodyElement = document.getElementsByTagName("tbody")[0];
  document.getElementsByTagName("input")[0].disabled = false;

  buttonsElements[0].addEventListener("click", () => {
    let inputFurniture = Array.from(JSON.parse(textAreaElements[0].value));
    for (const furniture of inputFurniture) {
      let nexRow = document.getElementsByTagName("tr")[1].cloneNode(true);
      nexRow.getElementsByTagName("td")[0].innerHTML = `<img src=${furniture["img"]}>`;
      nexRow.getElementsByTagName("td")[1].innerHTML = `<p>${furniture["name"]}</p>`;
      nexRow.getElementsByTagName("td")[2].innerHTML = `<p>${furniture["price"]}</p>`;
      nexRow.getElementsByTagName("td")[3].innerHTML = `<p>${furniture["decFactor"]}</p>`;
      nexRow.getElementsByTagName("td")[4].innerHTML = `<input type="checkbox"/>`;
      tbodyElement.appendChild(nexRow);
      textAreaElements[0].value = "";
    }
  });

  buttonsElements[1].addEventListener("click", () => {
    let furnitureCheckedNames = [];
    let totalPrice = 0;
    let decFactorSum = 0;
    let checkboxes = Array.from(document.getElementsByTagName("input"));
    for (const checkbox of checkboxes) {
      if(checkbox.checked){
        let tableRowElement = checkbox.parentElement.parentElement;
        let furnitureName = tableRowElement.getElementsByTagName("p")[0].textContent;
        let furniturePrice = Number(tableRowElement.getElementsByTagName("p")[1].textContent);
        let decFactor = Number(tableRowElement.getElementsByTagName("p")[2].textContent);

        furnitureCheckedNames.push(furnitureName);
        totalPrice += furniturePrice;
        decFactorSum += decFactor;
      }
    }

    textAreaElements[1].textContent += `Bought furniture: ${furnitureCheckedNames.join(", ")}\n`;
    textAreaElements[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    textAreaElements[1].textContent += `Average decoration factor: ${decFactorSum / furnitureCheckedNames.length}`;
  });
}