notice that the expect require is just a reference to the expect function, whereas with the should require, the function is being executed.

var chai = require('chai')
const expect = chai.expect
const should = chai.should();

expect interface provides a function as a starting point for chaining your language assertions. It works on node.js and in all browsers.

should interface extends Object.prototype to provide a single getter as the starting point for your language assertions. It works on node.js and in all modern browsers except Internet Explorer.


-------------
BDD
The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach()
context() is just an alias for describe(), and behaves the same way; it provides a way to keep tests easier to read and organized. Similarly, specify() is an alias for it().

TDD
The TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():
You need to tell Mocha to use the TDD interface, instead of the default BDD one:
mocha --ui tdd card.test.js
