function solve(input) {
    let n = Number(input.splice(input.length - 1, 1));
    let result = input.filter((e, index) => index % n === 0);
    console.log(result.join("\n"))
}