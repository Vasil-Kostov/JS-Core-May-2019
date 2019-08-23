function lasKNumbersSequence(n, k) {
    let arr = [1];
    
    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            if (i - j >= 0) {
                sum += arr[i - j];
            }
        }
        arr.push(sum);
    }

    console.log(arr.join(" "));
}