function coffeeMachine(input) {
    let totalIncome = 0;
    for (const order of input) {
        let tokens = order.split(", ");
        let money = Number(tokens[0]);
        let shugar = Number(tokens[tokens.length - 1]);
        let drink = tokens[1];

        let price = 0.80;
        if (tokens.includes("decaf")) {
            price += 0.10;
        }
        if (tokens.includes("milk")) {
            price += Number((price * 0.10).toFixed(1));
        }
        if(shugar > 0) {
            price += 0.10;
        }

        let difference = Math.abs(money - price);

        if (price > money) {
            console.log(`Not enough money for ${drink}. Need ${difference.toFixed(2)}$ more.`);
        } else {
            totalIncome += price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${difference.toFixed(2)}$`)
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

coffeeMachine([ '1.00, coffee, caffeine, milk, 4', 
                '0.40, tea, milk, 2',
                '1.00, coffee, decaf, 0']
);