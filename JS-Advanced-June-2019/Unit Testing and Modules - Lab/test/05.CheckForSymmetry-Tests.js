const isSymmetric = require("./05.CheckForSymmetry");
const assert = require("chai").assert;


describe("Is simmetric tests", function () {
    it("Should return 'true' if simmetric array is given", function () {
        const arr = [1, 2, 1];
        assert.isTrue(isSymmetric(arr))
    });

    it("Should return 'true' if simmetric whent array with elements of different types is given", function () {
        const arr = [1, "a", true, {}, true, "a", 1];
        assert.isTrue(isSymmetric(arr))
    });

    it("Should return 'true' if empty array is given", function () {
        const arr = [];
        assert.isTrue(isSymmetric(arr))
    });

    it("Should return 'false' if nonsimetric array", function () {
        const result = isSymmetric([1, 2, 3]);

        assert.isFalse(result, "Should return false if non symmetric array is given");
    });

    it("Should return 'false' when sequence is given", function () {
        const result = isSymmetric(1, 2, 1);

        assert.isFalse(result, "Should return false if not array is given");
    });

    it("Should return 'false' when string is given", function () {
        const result = isSymmetric("asdfg");

        assert.isFalse(result);
    });

    it("Should return 'false' when number is given", function () {
        const result = isSymmetric(5);

        assert.isFalse(result);
    });

    it("Should return 'false' when object is given", function () {
        const result = isSymmetric({});

        assert.isFalse(result);
    });

    it("Should return 'false' when boolean is given", function () {
        const result = isSymmetric(true);

        assert.isFalse(result);
    });

    it("Shoud be a function", function () {
        assert.isFunction(isSymmetric);
    });
});