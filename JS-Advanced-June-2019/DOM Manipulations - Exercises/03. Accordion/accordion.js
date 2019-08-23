function toggle() {
    let spanElement = document.getElementsByClassName("button")[0];
    const textDivElement = document.getElementById("extra");


    if (spanElement.textContent === "More") {
        spanElement.textContent = "Less";
        textDivElement.style.display = "block";
    } else {
        spanElement.textContent = "More";
        textDivElement.style.display = "none";
    }
}