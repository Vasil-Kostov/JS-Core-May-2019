function sortArrat(arr, order) {
    if (order === "asc") {
        return arr.sort((a, b) => { return a - b });
    } else {
        return arr.sort((a, b) => { return b - a });
    }
}