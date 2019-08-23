function smallestTwoNumbers(input) {
    console.log(input.sort((a, b) => { return a - b })
                     .slice(0, 2))
}