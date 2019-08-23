function solve(input) {
    let number = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= number) {
            number = input[i];
            console.log(number);
        }
    }
}