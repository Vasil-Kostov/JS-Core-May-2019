function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('div input:last-child'));

    function convertFromDays(days) {
        return {
            "days": days,
            "hours": days * 24,
            "minutes": days * 1440,
            "seconds": days * 86400
        }
    }

    buttons.forEach((b) => {
        b.addEventListener("click", (e) => {
            let eParnet = e.target.parentNode;
            let value = Number(eParnet.children[1].value);
            let id = eParnet.children[1].id;

            let time;
            if (id === "days") {
                time = convertFromDays(value);
            } else if (id === "hours") {
                time = convertFromDays(value / 24);
            } else if (id === "minutes") {
                time = convertFromDays(value / 1440)
            } else if (id === "seconds") {
                time = convertFromDays(value / 86400)
            }

            buttons.forEach((cb) => {
                let input = cb.parentNode.children[1];
                input.value = time[input.id];
            });
        });
    });
}