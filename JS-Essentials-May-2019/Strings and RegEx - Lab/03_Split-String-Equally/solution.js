function solve() {
    let text = document.getElementById("text").value;
    let partLength = parseInt(document.getElementById("number").value);

    function splitStringEqually(text, partLength) {
        let arr = [];
        let indexCounter = 0;

        if (text.length % partLength !== 0) {
            let len = text.length;
            let symbolsCount = 0;

            while (len % partLength !== 0) {
                len %= partLength;
                len++;
                symbolsCount++;
            }
            
            for (let i = 0; i < symbolsCount; i++) {
                text += text[indexCounter];
                indexCounter++;
            }
        }

        for (let i = 0; i < text.length; i += partLength) {
            arr.push(text.substr(i, partLength));
        }

        document.getElementById("result").innerHTML = arr.join(" ");
    }

    splitStringEqually(text, partLength);
}