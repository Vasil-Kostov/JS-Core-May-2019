function magicMatrix(matrix) {
    let sum = matrix[0].reduce((a,b) => a + b, 0);

    let magic = true;

    for (let i = 0; i < matrix.length; i++) {
        if ( matrix[i].reduce((a,b) => a + b, 0) !== sum) {
            magic = false;
            break;
        }
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[i][j];
        }
        if (colSum !== sum) {
            magic = false;
            break;
        }
    }

    console.log(magic);
}

magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )