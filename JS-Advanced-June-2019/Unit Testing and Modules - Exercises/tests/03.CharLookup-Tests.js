const lookupChar = require("../03.CharLookup");
const assert = require("chai").assert;

describe("lookupChar tests", function() {
    it("Should return undefined with non string firs parameter", function() {
        assert.isUndefined(lookupChar(7, 0));
    });

    it("Should return undefined with string second parameter", function() {
        assert.isUndefined(lookupChar(7, "0"));
    });

    it("Should return undefined with flationg-point second parameter", function() {
        assert.isUndefined(lookupChar("String", 3.14));
    });

    it("Should return 'incorrect index' with incorect index as second parameter", function() {
        assert.equal(lookupChar("String", 7), "Incorrect index");
    });

    it("Should return 'incorrect index' with negative index as second parameter", function() {
        assert.equal(lookupChar("String", -7), "Incorrect index");
    });

    it("Should return 'incorrect index' with string-length equal index as second parameter", function() {
        assert.equal(lookupChar("String", 6), "Incorrect index");
    });

    it("Should return correct value with correct input", function() {
        assert.equal(lookupChar("String", 3), "i");
        assert.equal(lookupChar("String", 5), "g");
    });
});