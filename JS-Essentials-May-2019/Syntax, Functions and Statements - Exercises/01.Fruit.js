function fruit(type, grams, pricePerKg) {
    let kg = grams / 1000;

    let moneyNeeded = kg * pricePerKg;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`)
}