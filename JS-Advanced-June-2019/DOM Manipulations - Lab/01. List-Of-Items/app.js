function addItem() {
    const ulElement = document.getElementById("items");
    let textInputElement = document.getElementById("newItemText");

    let li = document.createElement("li");
    li.textContent = textInputElement.value;
    ulElement.appendChild(li);

    textInputElement.value = "";
}