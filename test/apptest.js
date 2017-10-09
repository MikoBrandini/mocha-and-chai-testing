const app = require('../app');
const expect = require('chai').expect;
const assert = require('chai').assert;

//Results
let = sayHelloWorldResult = app.sayHelloWorld();
let = addNumbersResult = app.addNumbers(3, 2);
let = returnTruthy = app.returnTruthy(true);

describe('App', function() {

    //this just tests that the app is running
    describe('A simple test', function() {
        it('it passes if everything is working', function() {
            expect(true).to.be.true;
        });
    });


    describe('addNumbers', function() {
        it('addNumbers should return something bigger than 3', function() {
            assert.isAbove(addNumbersResult, 3);
        });
        it('addNumbers should give us back a number.', function() {
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('returnTruthy', function() {
        it('Please tell me the truth', function() {
            assert.isBoolean(returnTruthy, true);
        });
        it('returnTruthy should return a true boolean value', function() {
            assert.typeOf(returnTruthy, 'boolean');
        });
    });

    describe('sayhelloWorld', function() {
        it('Please return that iconic greeting', function() {
            assert.equal(sayHelloWorldResult, 'Hello World!');
        });
        it('sayHelloWorld should return a string type.', function() {
            assert.typeOf(sayHelloWorldResult, 'string');
        });
    });



});
