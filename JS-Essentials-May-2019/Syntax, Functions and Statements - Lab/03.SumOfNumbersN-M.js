function SumRangeOfNumbers(firstNum, lastNum){
    let start = Number(firstNum);
    let end = Number(lastNum);

    let result = 0;

    for (let i = start; i <= end; i++){
        result += i;
    }

    console.log(result);
}