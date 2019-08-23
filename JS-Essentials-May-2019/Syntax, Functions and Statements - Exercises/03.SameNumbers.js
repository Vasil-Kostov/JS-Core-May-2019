function sameDigits(number) {

    let digits = number.toString().split('').map(Number);
    let firstDigit = digits[0];
    let sum = firstDigit;
    let areEqual = true;

    for (let i = 1; i < digits.length; i++) {
        let currentDigit = digits[i];
        sum += currentDigit;

        if (firstDigit !== currentDigit){
            areEqual = false;
        }
    }

    console.log(areEqual);
    console.log(sum);
}