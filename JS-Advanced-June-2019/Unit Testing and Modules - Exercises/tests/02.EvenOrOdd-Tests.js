const isOddOrEven = require("../02.EvenOrOdd");
const assert = require("chai").assert;

describe("isOddOrEven Tests", function() {
    it("Should return undefined when non string is given", function() {
        assert.isUndefined(isOddOrEven(7));
        assert.isUndefined(isOddOrEven({prop: "val"}));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven(false));
    });

    it("Whould return correct result when even length string is given", function(){
        let expected = "even";
        let actual = isOddOrEven("string")
        assert.equal(expected, actual);
    });

    it("Whould return correct result when odd length string is given", function(){
        let expected = "odd";
        let actual = isOddOrEven("str")
        assert.equal(expected, actual);
    });

    it("Should return correct results when multiple consecutive checks are made", function() {
        assert.equal("odd", isOddOrEven("error"));
        assert.equal("even", isOddOrEven("boza"));
        assert.equal("odd", isOddOrEven("ror"));
        assert.equal("even", isOddOrEven("banichka"));
    });
});