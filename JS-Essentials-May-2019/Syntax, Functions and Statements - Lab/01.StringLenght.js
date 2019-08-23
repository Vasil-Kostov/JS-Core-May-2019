function solve(arr1, arr2, arr3){
    let sumLenght;
    let averageLenght;

    let FirstArgLenght = arr1.length;
    let secondArgLenght = arr2.length;
    let thirdArgLenght = arr3.length;

    sumLenght = FirstArgLenght + secondArgLenght + thirdArgLenght;
    averageLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(averageLenght);
}

solve('chocolate', 'ice cream', 'cake');