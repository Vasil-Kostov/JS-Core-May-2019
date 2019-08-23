function rotateArray(input) {
    let rotations = input.splice(input.length - 1, 1);

    for (let i = 0; i < rotations % input.length; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(" "));
}