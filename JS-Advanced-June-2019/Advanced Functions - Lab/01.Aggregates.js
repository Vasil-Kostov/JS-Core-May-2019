function aggregates(input) {
    console.log("Sum = " + input.reduce((a, b) => a + b, 0));
    console.log("Min = " + input.reduce((a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER));
    console.log("Max = " + input.reduce((a, b) => Math.max(a,b), Number.MIN_SAFE_INTEGER));
    console.log("Product = " + input.reduce((a, b) => a * b, 1));
    console.log("Join = " + input.reduce((a, b) => `${a}${b}`, ""));
}