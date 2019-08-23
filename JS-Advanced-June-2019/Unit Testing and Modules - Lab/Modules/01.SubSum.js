function subSum(arr, start, end) {
    if (!Array.isArray(arr)){
        return NaN;
    }

    if (arr.some(x => !Number(x))) {
        return NaN;
    }

    start = start < 0 ? 0 : start;
    end = end > arr.length ? arr.length : end + 1;

    return arr
        .slice(start, end)
        .reduce((x, y) => x + y, 0);
}