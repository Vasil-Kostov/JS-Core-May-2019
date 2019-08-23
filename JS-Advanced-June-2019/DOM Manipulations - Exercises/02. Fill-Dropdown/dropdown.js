function addItem() {
    const newTextElement = document.getElementById("newItemText");
    const newValueElement = document.getElementById("newItemValue");

    const optionElement = document.createElement("option");
    optionElement.text = newTextElement.value;
    optionElement.value = newValueElement.value;

    document.getElementById("menu").appendChild(optionElement);

    newTextElement.value = "";
    newValueElement.value = "";
}