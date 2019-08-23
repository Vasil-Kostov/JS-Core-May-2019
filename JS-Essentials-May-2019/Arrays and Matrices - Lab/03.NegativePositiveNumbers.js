function arrangeArray(input) {
    let result = [];
    input.map(e => Number(e) < 0 ? result.unshift(e) : result.push(e));
    return result;
}