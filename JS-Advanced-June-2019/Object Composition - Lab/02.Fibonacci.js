function getFibonator() {
    let firstNum = 0;
    let secondNum = 1;

    function getNextNum() {
        let sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
        return firstNum;
    }

    return getNextNum;
}