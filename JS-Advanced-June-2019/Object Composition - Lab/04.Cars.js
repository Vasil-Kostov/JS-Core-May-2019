function solve(input) {
    let carFactoryObject = function () {
        let cars = {};

        return {
            create: (name) => cars[name] = {},
            inherit: (child, parent) => Object.setPrototypeOf(cars[child], cars[parent]),
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let carData = [];

                for (const key in cars[name]) {
                    carData.push(`${key}:${cars[name][key]}`);
                }

                console.log(carData.join(", "));
            }
        }
    }

    let carFactory = carFactoryObject();

    for (const element of input) {
        const tokens = element.split(/\s+/g);
        const command = tokens[0];
        const name = tokens[1];

        switch (command) {
            case "create":
                carFactory.create(name);

                if (tokens[2] === "inherit") {
                    carFactory.inherit(name, tokens[3]);
                }
                break;
            case "set":
                carFactory.set(name, tokens[2], tokens[3]);
                break;
            case "print":
                carFactory.print(name);
                break;
        }
    }
}