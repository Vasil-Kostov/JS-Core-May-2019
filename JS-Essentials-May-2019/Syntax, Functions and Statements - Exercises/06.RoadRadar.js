function roadRadar(input) {
    let speed = +input[0];
    let area = input[1];

    switch (area) {
        case "city": speed -= 50; break;
        case "motorway": speed -= 130; break;
        case "interstate": speed -= 90; break;
        case "residential": speed -= 20; break;
    }

    let result = "";

    if (speed > 0 && speed <= 20) {
        result = "speeding";
    } else if (speed > 20 && speed <= 40) {
        result = "excessive speeding";
    } else if (speed > 40) {
        result = "reckless driving ";
    }

    console.log(result);
}