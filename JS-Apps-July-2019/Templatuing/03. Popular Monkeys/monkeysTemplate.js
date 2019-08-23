(() => {
    renderMonkeysTemplate();

    function renderMonkeysTemplate() {
        let template = document.getElementById("monkey-template").innerHTML;
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            monkeys
        });

        document.getElementsByClassName("monkeys")[0].innerHTML = rendered;

        document.getElementsByClassName("monkeys")[0].addEventListener("click", showInfo);
    }

    function showInfo(event) {
        if (event.target.tagName === "BUTTON") {
            if(event.target.nextElementSibling.style.display == "none") {
                event.target.nextElementSibling.style.display = "block";
            } else {
                event.target.nextElementSibling.style.display = "none";
            }
        }
    }
})();