function GCD(firstNum, secondNum) {
    
    while (secondNum) {
        var temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    console.log(firstNum);
}