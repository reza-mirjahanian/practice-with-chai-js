notice that the expect require is just a reference to the expect function, whereas with the should require, the function is being executed.

var chai = require('chai')
const expect = chai.expect
const should = chai.should();

expect interface provides a function as a starting point for chaining your language assertions. It works on node.js and in all browsers.

should interface extends Object.prototype to provide a single getter as the starting point for your language assertions. It works on node.js and in all modern browsers except Internet Explorer.
