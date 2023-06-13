// HelloWorldUnitTest/HelloWorld.test.js

// Import the functions 
// const { function } = require('./file-path'); //example
const { hello, sumOfTwoNumbers } = require('./HelloWorld');

// formating for tests most of the time follow this pattern
// test('description of the test case', () => {
//     expect(functionUnderTest(/* input arguments */)).toBe(expectedOutcome);
// });

// Jest tests for hello()
test('should return "Hello, World!"', () => {
  // Call the function and expect it to return "Hello, World!"
  expect(hello()).toBe('Hello, World!');
});

// Jest tests for sumOfTwoNumbers()
test('should return the sum of two numbers', () => {
    expect(sumOfTwoNumbers(2, 3)).toBe(5);
    expect(sumOfTwoNumbers(-1, 5)).toBe(4);
    expect(sumOfTwoNumbers(0, 0)).toBe(0);
    expect(sumOfTwoNumbers(2, 3)).toEqual(5);
    expect(sumOfTwoNumbers(-1, 5)).toEqual(4);
    expect(sumOfTwoNumbers(0, 0)).toEqual(0);
    // expect(sumOfTwoNumbers(9, 1)).toBe('woah'); // intentional for the purpose of demonstrating a failing test.
});
