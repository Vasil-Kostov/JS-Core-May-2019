function addItem() {
    const ulElement = document.getElementById("items");
    let textInputElement = document.getElementById("newText");

    const aElement = document.createElement("a");
    aElement.textContent = "[Delete]";
    aElement.setAttribute(name="href", value="#")
    aElement.addEventListener("click", deleteItem);
    
    let li = document.createElement("li");
    li.textContent = textInputElement.value + " ";
    li.appendChild(aElement);
    ulElement.appendChild(li);
    textInputElement.value = "";

    function deleteItem() {
        ulElement.removeChild(this.parentNode);
    }
}