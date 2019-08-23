function solve() {
    let myObject = {
        __proto__: {},

        extend: function (template) {
            for (const propertyName of Object.getOwnPropertyNames(template)) {
                if (typeof(template[propertyName]) === 'function') {
                    Object.setPrototypeOf(myObject, template);
                } else {
                    myObject[propertyName] = template[propertyName];
                }
            }
        }
    };

    return myObject;
}