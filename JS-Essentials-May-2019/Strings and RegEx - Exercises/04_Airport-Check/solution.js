function solve() {
    let nameRegex = /( ([A-Z]([A-Za-z]+)?-([A-Z]([A-Za-z]+)?\.-)?[A-Z]([A-Za-z]+)?) )/g;
    let airportsRegex = /( ([A-Z]{3}\/[A-Z]{3}) )/g;
    let flightNumberRegex = /( ([A-Z]{1,3}\d{1,5}) )/g;
    let companyRegex = /(- ([A-Z]([a-z]+)?\*[A-Z]([a-z]+)?) )/g;

    let inputStr = document.getElementById("string").value.split(",");
    let flightContent = inputStr[0];
    let outputOption = inputStr[1].trim();

    let name = "";
    let airports = "";
    let flightNumber = "";
    let companyName = "";

    let result = "";
    switch (outputOption) {
        case "name":
            name = nameRegex.exec(flightContent)[2].split("-").join(" ");
            result = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case "flight":
            flightNumber = flightNumberRegex.exec(flightContent)[2];
            airports = airportsRegex.exec(flightContent)[2].split("/");
            result = `Your flight number ${flightNumber} is from ${airports[0]} to ${airports[1]}.`;
            break;
        case "company":
            companyName = companyRegex.exec(flightContent)[2].split("*").join(" ");
            result = `Have a nice flight with ${companyName}.`;
            break;
        case "all":
            flightNumber = flightNumberRegex.exec(flightContent)[2];
            airports = airportsRegex.exec(flightContent)[2].split("/");
            companyName = companyRegex.exec(flightContent)[2].split("*").join(" ");
            name = nameRegex.exec(flightContent)[2].split("-").join(" ");
            result = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airports[0]} to ${airports[1]}. Have a nice flight with ${companyName}.`;
            break;
    }

    let resultElement = document.getElementById("result");
    resultElement.textContent = result;
}