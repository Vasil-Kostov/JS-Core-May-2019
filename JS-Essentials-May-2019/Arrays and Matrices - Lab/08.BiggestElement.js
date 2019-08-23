function biggestElement(matrix) {
    let max = matrix[0][0];

    for (let i  = 0; i < matrix.length; i++) {
        let arrMax = Math.max(...matrix[i]);
        max = Math.max(max, arrMax);
    }

    console.log(max);
}