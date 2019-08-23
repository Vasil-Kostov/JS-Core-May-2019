const sum = require("./04.SumNumbers");
const assert = require("chai").assert;

describe("Sum tests", function () {
    it("Should work correctly with [1, 2, 4]", function() {
        const arr = [1, 2, 4];

        const expected = 7;
        const actual = sum(arr);

        assert.equal(expected, actual, `Sum([1, 2, 3]) returns ${actual} instead of ${expected}`);
    });

    it("Should return zero if empty array is given", function () {
        const arr = [];

        const expected = 0;
        const actual = sum(arr);

        assert.equal(expected, actual, `Sum([]) returns ${actual} instread of ${expected}`)
    });

    it("Should return NaN if any element is not a number", function () {
        const arr = [1, 'a', 2];

        const actual = sum(arr);

        assert.isNaN(actual, `Sum function does not return NaN when the input array is ${arr}`)
    });
});