const rgbToHexColor = require("./06.RGBtoHex");
const assert = require("chai").assert;

describe("RGBtoHexColor Tests", function () {
    it('should return correct hexColor', function () {
        let expected = '#FF9EAA';
        let actual = rgbToHexColor(255, 158, 170);
        assert.equal(actual, expected);

        expected = '#000000';
        actual = rgbToHexColor(0, 0, 0);
        assert.equal(actual, expected);

        expected = '#FFFFFF';
        actual = rgbToHexColor(255, 255, 255);
        assert.equal(actual, expected);
    });

    it('should return undefined with invalid red', function () {
        let result = rgbToHexColor('abc', 0, 0);
        assert.isUndefined(result);

        result = rgbToHexColor(-1, 0, 0);
        assert.isUndefined(result);

        result = rgbToHexColor(256, 0, 0);
        assert.isUndefined(result);
    });

    it('should return undefined with invalid green', function () {
        let result = rgbToHexColor(0, 'abc', 0);
        assert.isUndefined(result);

        result = rgbToHexColor(0, -1, 0);
        assert.isUndefined(result);

        result = rgbToHexColor(0, 256, 0);
        assert.isUndefined(result);
    });

    it('Should return undefined with invalid blue', function () {

        let result = rgbToHexColor(0, 0, 'abc');
        assert.isUndefined(result);

        result = rgbToHexColor(0, 0, -1);
        assert.isUndefined(result);

        result = rgbToHexColor(0, 0, 256);
        assert.isUndefined(result);
    });
});