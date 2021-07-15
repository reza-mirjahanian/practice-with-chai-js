const assert = require('chai').assert;

suite("Test Assert", () => {
    setup('', () => {
    });
    suite('function 1', () => {
        test("equals 1 for sets of zero length", () => {
            assert.equal(1, 1);
        })
    });
});
