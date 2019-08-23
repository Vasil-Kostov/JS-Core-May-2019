function argumentInfo() {
    let typecounter = {};

    for (const arg of arguments) {
        let type = typeof arg;

        console.log(`${type}: ${arg}`);

        if (!typecounter[type]) {
            typecounter[type] = 0;
        }

        typecounter[type]++;
    }

    Object.entries(typecounter)
        .sort((a, b) =>  b[1] - a[1] )
        .forEach(t => console.log(`${t[0]} = ${t[1]}`));
}