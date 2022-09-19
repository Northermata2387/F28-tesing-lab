const myFunctions = require('./functions')



test('returnTwo', () => {
    expect(myFunctions.returnTwo()).toBe(2)
  })



test('greeting', () => {
    expect(myFunctions.greeting('Jill'))===("Hello, Jill.")
})



describe('Math functions', () => {

    test('test should expect add 5, 9 to equal 14', () => {
        expect(myFunctions.add(5, 9)).toBe(14)
    })

    test('multiply 2 numbers', () => {
        expect(myFunctions.multiply(2, 6)).toBe(12)
    })

    test('divide 2 numbers', () => {
        expect(myFunctions.divide(9, 3)).toBe(3)
    })

    test('subtact 2 numbers', () => {
        expect(myFunctions.subtract(5, 3)).toBe(2)
    })

})
