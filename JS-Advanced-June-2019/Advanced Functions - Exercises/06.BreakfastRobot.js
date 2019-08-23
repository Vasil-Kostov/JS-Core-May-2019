function addOn() {
    return (() => {
        const recipesObject = {
            "apple": { carbohydrate: 1, flavour: 2 },
            "lemonade": { carbohydrate: 10, flavour: 20 },
            "burger": { carbohydrate: 5, fat: 7, flavour: 3 },
            "eggs": { protein: 5, fat: 1, flavour: 1 },
            "turkey": { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }

        const ingredientsObject = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0,
        }

        function prepare(product, productQuantity) {
            const ingredientsNeeded = Object.entries(recipesObject[product]);

            for (const [ingredient, quantity] of ingredientsNeeded) {
                const mictoelementQuantityNeeded = quantity * productQuantity;

                if (mictoelementQuantityNeeded > ingredientsObject[ingredient]) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const [ingredient, quantity] of ingredientsNeeded) {
                ingredientsObject[ingredient] -= quantity * productQuantity;
            }

            return "Success";
        }

        function restock(ingredient, quantity) {
            ingredientsObject[ingredient] += quantity;
            
            return "Success";
        }

        function report() {
            return Object.entries(ingredientsObject)
                .map(([ingr, quan]) => `${ingr}=${quan}`)
                .join(" ");
        }

        return (input) => {
            const tokens = input.split(' ');
            const command = tokens[0];

            switch (command) {
                case "prepare":
                    return prepare(tokens[1], Number(tokens[2]));

                case "restock":
                    return restock(tokens[1], Number(tokens[2]));

                case "report":
                    return report();
            }
        }
    })();
}