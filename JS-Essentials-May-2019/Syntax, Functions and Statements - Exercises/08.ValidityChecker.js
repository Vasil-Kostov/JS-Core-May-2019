function validityChecker(input) {
    let x1 = +input[0];
    let y1 = +input[1];
    let x2 = +input[2];
    let y2 = +input[3];

    let distanceCenterToA = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distanceCenterToB = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distanceAToB = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${distanceCenterToA % 1 === 0 ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distanceCenterToB % 1 === 0 ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceAToB % 1 === 0 ? "valid" : "invalid"}`);
}

validityChecker([2, 1, 1, 1]);