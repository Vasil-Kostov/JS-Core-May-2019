function solve() {
    let keyword = document.getElementById("string").value;
    let text = document.getElementById("text").value;

    let messageRegEx = new RegExp(`${keyword}(.+)${keyword}`);
    let message = `Message: ${text.match(messageRegEx)[1]}`;

    let degreesPattern = /(north|east)[\s\S]*?(\d{2})[^,]*,[^,]*?(\d{6})/gi;
    let northDegreese;
    let eastDegreese;

    let currentDegreesMatch = degreesPattern.exec(text);

    while (currentDegreesMatch) {
        if (currentDegreesMatch[1].toLowerCase() === 'north') {
            northDegreese = `${currentDegreesMatch[2]}.${currentDegreesMatch[3]} N`;
        }
        else if (currentDegreesMatch[1].toLowerCase() === 'east') {
            eastDegreese = `${currentDegreesMatch[2]}.${currentDegreesMatch[3]} E`;
        }

        currentDegreesMatch = degreesPattern.exec(text);
    }

    let result = document.getElementById("result");

    let northParagraph = document.createElement("p");
    northParagraph.textContent = northDegreese;
    result.appendChild(northParagraph);

    let eastParagraph = document.createElement("p");
    eastParagraph.textContent = eastDegreese;
    result.appendChild(eastParagraph);

    let messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;
    result.appendChild(messageParagraph);
}