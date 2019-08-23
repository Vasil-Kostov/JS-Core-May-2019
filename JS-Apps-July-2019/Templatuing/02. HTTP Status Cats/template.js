(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        // TODO: Render cat template and attach events
        let template = document.getElementById("cat-template").innerHTML;
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            cats: window.cats
        });

        document.getElementById("allCats").innerHTML = rendered;

        document.getElementById("allCats").addEventListener("click", handleClick)
    }

    function handleClick(event) {
        if (event.target.getAttribute("class") === "showBtn") {
            if (event.target.textContent === "Show status code") {
                event.target.textContent = "Hide status code";
                event.target.nextElementSibling.style.display = "block";
            } else {
                event.target.textContent = "Show status code";
                event.target.nextElementSibling.style.display = "none";
            }
        }
    }

})()
