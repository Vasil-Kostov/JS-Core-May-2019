function solve() {
    let liElements = document.getElementsByTagName("li");
    let inputFieldElement = document.getElementsByTagName("input")[0];
    let addButton = document.getElementsByTagName("button")[0];

    addButton.addEventListener("click", () => {
        let name = inputFieldElement.value;
        let liElementIndex = name[0].toUpperCase().charCodeAt(0) - 65;

        name = name[0].toUpperCase() + name.slice(1).toLowerCase();

        if (liElements[liElementIndex].textContent) {            
            liElements[liElementIndex].textContent += `, ${name}`;
        } else {
            liElements[liElementIndex].textContent += name;
        }        
    });
}