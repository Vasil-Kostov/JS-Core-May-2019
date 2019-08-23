const createCalculator = require("./07.AddSubtract");
const assert = require("chai").assert;

describe("AddSubtract tests", function() {
    let calculator;

    this.beforeEach(function() {
        calculator = createCalculator();
    });

    it("Should return object with properties: add, subtract and get", function () {
        assert.isObject(calculator, "Shoud be an object");
        assert.property(calculator, "add", "Should have an 'add' property");
        assert.property(calculator, "subtract", "Should have an 'subtract' property");
        assert.property(calculator, "get", "Should have an 'get' property");
    });

    it("Shoud have initial value of zero", function() {
        const expected = 0;

        const actual = calculator.get();

        assert.equal(expected, actual, `Expected initial value: ${expected} but it's ${actual}`);
    });

    it("Shoud not be able tom modify the value externaly", function() {
        calculator.value = 3;

        const expected = 0;
        const actual = calculator.get();

        assert.equal(expected, actual, "You shouldn't be able to chang the value externaly");
    });

    it("Add function should be able to work with both parsable and numeric input", function() {
        assert.doesNotThrow(() => calculator.add(12), "Add isn't working with numeric value");
        assert.doesNotThrow(() => calculator.add("15"), "Add isn't working with parsable value");
    });

    it("Subtract function should be able to work with both parsable and numeric input", function() {
        assert.doesNotThrow(() => calculator.subtract(12), "Subtract isn't working with numeric value");
        assert.doesNotThrow(() => calculator.subtract("15"), "Subtract isn't working with parsable value");
    });

    it("Add function should add value correctly", function() {
        calculator.add(7);
        
        const expected = 7;
        const actual = calculator.get();

        assert.equal(expected, actual, `Expexted value to be ${expected} but it's ${actual} instead`);
    })

    it("Subtract function should work correctly", function() {
        calculator.subtract(-7);
        
        const expected = 7;
        const actual = calculator.get();

        assert.equal(expected, actual, `Expexted value to be ${expected} but it's ${actual} instead`);
    });

    it("Add function shoud set the value to NaN if non parsable input is given", function() {
        calculator.add("number");

        const actual = calculator.get();

        assert.isNaN(actual);
    });

    it("Subtract function shoud set the value to NaN if non parsable input is given", function() {
        calculator.subtract("number");

        const actual = calculator.get();

        assert.isNaN(actual);
    });

    it("All functions should work correctly", function() {
        calculator.add(10);
        calculator.subtract(3);
        calculator.add("-10");
        calculator.subtract("-10")

        const expected = 10 - 3 + (-10) - (-10);
        const actual = calculator.get();

        assert.equal(expected, actual);
    });
});