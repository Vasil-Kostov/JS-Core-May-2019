function calorieObject(input) {
    let inputAsObj = {};

    for (let i = 0; i < input.length; i += 2) {
        inputAsObj[input[i]] = +input[i + 1];
    }

    console.log(inputAsObj);
}