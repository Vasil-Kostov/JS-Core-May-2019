function coffeeStorage() {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let [reportElement, inspectionElement] = document.getElementsByTagName("p");
    let storage = {};

    for (const line of input) {
        let [command, brand, name, date, quantity] = line.split(", ");

        if (command === "IN") {
            if (!storage[brand]) {
                storage[brand] = {};
            }

            if (!storage[brand][name]) {
                storage[brand][name] = { date, quantity: 0 };
            }

            if (storage[brand][name].date === date) {
                storage[brand][name].quantity += Number(quantity);
            } else if (storage[brand][name].date < date) {
                storage[brand][name] = { date, quantity: Number(quantity) };
            }
        } else if (command === "OUT") {
            if (storage[brand]
                && storage[brand][name]
                && storage[brand][name].date > date
                && storage[brand][name].quantity >= Number(quantity)) {
                storage[brand][name].quantity -= Number(quantity);
            }
        } else if (command === "INSPECTION") {
            inspection(storage);
        } else if (command === "REPORT") {
            report(storage);
        }
    }

    function inspection(storage) {
        Object.entries(storage)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(([brand, name]) => {
                let result = [];
                Object.entries(name)
                    .sort((a, b) => b[1].quantity - a[1].quantity)
                    .forEach(([name, info]) => {
                        result.push(`${name} - ${info.date} - ${info.quantity}.`)
                    });
                
                inspectionElement.innerHTML += `${brand}: ${result.join(" ")}` + "<br />";
            });

    }

    function report(storage) {
        Object.entries(storage)
            .forEach(([brand, name]) => {
                let result = [];
                Object.entries(name)
                    .forEach(([name, info]) => {
                        result.push(`${name} - ${info.date} - ${info.quantity}.`)
                    });

                reportElement.innerHTML += `${brand}: ${result.join(" ")}` + "<br />";
            });
    }

}