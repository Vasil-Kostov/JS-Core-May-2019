function solve() {
    let inputArr = JSON.parse(document.getElementById("arr").value);
    let result = document.getElementById("result");

    let nameRegEx = /^[A-Z][a-z]* [A-Z][a-z]*/;
    let numberRegEx = /(\+359 \d \d{3} \d{3})|(\+359-\d-\d{3}-\d{3})/;
    let emailRegEx = / [a-z]+\@[a-z]+\.[a-z]{2,3}$/;
    
    inputArr.forEach(element => {
        
        if (nameVaidation(element) && phoneNumVaidation(element) && emailVaidation(element)) {
            let p1 = document.createElement("p");
            p1.textContent += `Name: ${element.match(nameRegEx)}`;
            result.appendChild(p1);

            let p2 = document.createElement("p");
            p2.textContent += `Phone Number: ${element.match(numberRegEx)[0]}`;
            result.appendChild(p2);
            
            let p3 = document.createElement("p");
            p3.textContent += `Email:${element.match(emailRegEx)}`;
            result.appendChild(p3);
        } else {
            let p = document.createElement("p");
            p.textContent = "Invalid data";
            result.appendChild(p)
        }
        
        let dashes = document.createElement("p");
        dashes.textContent = '- - -';
        result.appendChild(dashes);
    });

    function nameVaidation(str) {
        return nameRegEx.test(str);
    }

    function phoneNumVaidation(str) {
        return numberRegEx.test(str);
    }

    function emailVaidation(str) {
        return emailRegEx.test(str);
    }
}