function solve() {
    
    const elements = {
        bookInput: document.querySelector("body > form > input[type=text]:nth-child(2)"),
        yearInput: document.querySelector("body > form > input[type=number]:nth-child(4)"),
        priceInput: document.querySelector("body > form > input[type=number]:nth-child(6)"),
        addBookBtn: document.querySelector("body > form > button"),
        sectionOldBooks: document.querySelector("#outputs > section:nth-child(1) > div.bookShelf"),
        sectionNewBooks: document.querySelector("#outputs > section:nth-child(2) > div.bookShelf"),
        totalsStoreProfit: document.querySelector("body > h1:nth-child(3)"),
    }

    elements.addBookBtn.addEventListener("click", addNewBook);

    function addNewBook(event) {
        event.preventDefault();

        let title = elements.bookInput.value;
        let year = Number(elements.yearInput.value);
        let price = Number(elements.priceInput.value);

        if(title && Number(year) > 0 && Number(price) > 0) {
            let div = document.createElement("div");
            div.classList.add("book");
            let p = document.createElement("p");
            p.textContent = `${title} [${year}]`;
            let btnBuy = document.createElement("button");

            if(year < 2000) {
                price = price * 0.85;
            }

            btnBuy.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            btnBuy.addEventListener("click", buyABook);

            let moveToOldBtn = document.createElement("button");
            moveToOldBtn.textContent = "Move to old section";
            moveToOldBtn.addEventListener("click", moveToOldSection);

            div.appendChild(p);
            div.appendChild(btnBuy);

            if(year < 2000) {
                elements.sectionOldBooks.appendChild(div);
            } else {
                div.appendChild(moveToOldBtn);

                elements.sectionNewBooks.appendChild(div);
            }
        }

        elements.bookInput.value = "";
        elements.yearInput.value = "";
        elements.priceInput.value = "";
    }

    function buyABook(event) {
        event.preventDefault();

        let price = Number(event.target.textContent.split(" ")[4]);
        
        let profit = Number(elements.totalsStoreProfit.textContent.split(" ")[3]);
        profit += price;

        elements.totalsStoreProfit.textContent = `Total Store Profit: ${profit} BGN`;

        event.target.parentNode.remove();
    }

    function moveToOldSection(event) {
        event.preventDefault();

        let div = event.target.parentNode;
        let buttons = div.getElementsByTagName("button");

        let price = Number(buttons[0].textContent.split(" ")[4]) * 0.85;
        buttons[0].textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        buttons[1].remove();

        elements.sectionOldBooks.appendChild(div);
    }
}