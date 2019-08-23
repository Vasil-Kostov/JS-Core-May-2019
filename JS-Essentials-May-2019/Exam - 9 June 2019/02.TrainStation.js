function trainStation(wagonCapacity, passangerArray) {
    let train = [];
    let passangersOnBoard = 0;
    let initialPassangers = passangerArray.reduce((a, b) => a + b, 0);

    let remainingPassangers = 0;
    for (let i = 0; i < passangerArray.length; i++) {
        if (passangerArray[i] + remainingPassangers <= wagonCapacity) { //what if it's zero
            train[i] = passangerArray[i] + remainingPassangers;
            remainingPassangers = 0;
        } else {
            train[i] = wagonCapacity;
            remainingPassangers = passangerArray[i] + remainingPassangers - wagonCapacity;                
        }

        passangersOnBoard += train[i];
    }

    console.log(train);
    
    if (passangersOnBoard === initialPassangers) {
        console.log("All passengers aboard");
    } else {
        console.log(`Could not fit ${initialPassangers - passangersOnBoard} passengers`);
    }
}

trainStation(6, [5, 15, 2])