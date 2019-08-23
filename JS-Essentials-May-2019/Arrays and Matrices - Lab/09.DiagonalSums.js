function diagonalSums(matrix) {
    let mainDiagonalSum= 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix[0].length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[matrix.length - 1 -i][i];
    }

    console.log(mainDiagonalSum + " " + secondaryDiagonalSum);
}