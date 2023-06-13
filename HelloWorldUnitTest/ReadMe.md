making unit test using Jest

1. npm init -y
2. npm install --save-dev jest
3. write the tests
4. npx jest

test case is Jest explanation:
    test: This is the Jest function used to define a test case.
    
    'description of the test case': A string describing the purpose or behavior being tested.
    
    () => { ... }: An arrow function that contains the test code. This is where you write the code to exercise the function under test and make assertions using the expect function.

    expect(functionUnderTest(/* input arguments */)).toBe(expectedOutcome): The expect function is used to make assertions about the behavior of the function under test. It takes the function call or expression being tested as its argument and then uses matcher functions like toBe, toEqual, or others to check if the result matches the expected outcome.

        toBe
            This matcher is used to perform strict equality comparison (===). It checks whether the actual value is strictly equal to the expected value, both in terms of type and value.
                expect(5).toBe(5); // Passes
                expect('hello').toBe('hello'); // Passes
                expect([1, 2]).toBe([1, 2]); // Fails
            In the example above, the first two assertions pass because the actual and expected values are strictly equal. However, the third assertion fails because toBe compares the reference of the arrays, which are different, rather than comparing the array contents.

            When comparing two arrays using the toBe matcher, it checks for strict equality of the references, not the content of the arrays. In JavaScript, objects (including arrays) are reference types, meaning that when you assign an object or array to a variable, the variable holds a reference to that object/array in memory, rather than the actual values themselves.

            So, when you compare two arrays with toBe, it checks whether they are the same reference in memory, not whether their contents are the same. This is why the assertion expect([1, 2]).toBe([1, 2]) fails, even though the content of the arrays is the same.

                const arr1 = [1, 2];
                const arr2 = [1, 2];
                const arr3 = arr1;

                expect(arr1).toBe(arr2); // Fails
                expect(arr1).toBe(arr3); // Passes
            
            In this example, arr1 and arr2 are two different arrays with the same content. However, since they have different references in memory, the toBe comparison fails. On the other hand, arr1 and arr3 reference the same array, so the toBe comparison passes.

            If you want to compare the contents of arrays, you should use the toEqual matcher or write custom comparison logic to check each element of the arrays individually.

        toEqual
            This matcher is used to perform deep equality comparison. It checks whether the actual value is deeply equal to the expected value, meaning that it compares the contents of objects and arrays recursively.
                expect(5).toEqual(5); // Passes
                expect('hello').toEqual('hello'); // Passes
                expect([1, 2]).toEqual([1, 2]); // Passes
            In this case, all three assertions pass because toEqual performs a deep comparison, ensuring that the actual and expected values have the same content.