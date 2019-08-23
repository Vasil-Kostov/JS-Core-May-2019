function solve(input) {
    console.log(input.filter((e, index) => index % 2 !== 0)
                     .map(e => e * 2)
                     .reverse()
                     .join(" "));
}