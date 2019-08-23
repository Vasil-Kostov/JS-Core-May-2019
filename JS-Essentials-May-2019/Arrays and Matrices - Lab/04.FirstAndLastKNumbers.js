function solve(input) {
    console.log(input.slice(1, input[0] + 1));
    console.log(input.splice((input.length - input[0]), input[0]));
}