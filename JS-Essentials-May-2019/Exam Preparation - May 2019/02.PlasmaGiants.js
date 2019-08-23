function plasmaGiants(initialArr, cutSize) {
    let hitPower = Math.min(...initialArr);
    let minHP = Math.max(...initialArr);
    let firstGiant = initialArr.splice(0, initialArr.length / 2);
    let secondGiant = initialArr;

    let firstGiantHP = 0;
    let secondGiantHP = 0;
    while (firstGiant.length > 0) {
        firstGiantHP += firstGiant.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiantHP += secondGiant.splice(0, cutSize).reduce((a, b) => a * b);
    }

    let rounds = 0;

    if (hitPower !== 0) {
        while (firstGiantHP > minHP && secondGiantHP > minHP) {
            firstGiantHP -= hitPower;
            secondGiantHP -= hitPower;
            rounds++;
        }
    }

    rounds++;
    let message = "";
    if (firstGiantHP > secondGiantHP) {
        message = `First Giant defeated Second Giant with result ${firstGiantHP} - ${secondGiantHP} in ${rounds} rounds`;
    } else if (firstGiantHP < secondGiantHP) {
        message = `Second Giant defeated First Giant with result ${secondGiantHP} - ${firstGiantHP} in ${rounds} rounds`;
    } else {
        message = `Its a draw ${firstGiantHP} - ${secondGiantHP}`;
    }

    console.log(message);
}

plasmaGiants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2)