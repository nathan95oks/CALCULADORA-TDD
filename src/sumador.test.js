const { add } = require('./funciones');  

describe('add function', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return one number if the input is one', () => {
        expect(add('1')).toBe(1);
    });

    test('should return addition of 2 numbers', () => {
        expect(add('1,2')).toBe(3);  
    });

    test('should return addition of 2 or more numbers with delimiters , and -', () => {
        expect(add('1-2,4')).toBe(7);  
    });

    test('should return 17 for custom delimiter ";": "//[;] 6;7;4"', () => {
        expect(add('//[;] 6;7;4')).toBe(17);
    });
    
    test('should return 12 for mixed delimiters with custom delimiter ";": "//[;] 6,3-2;1"', () => {
        expect(add('//[;] 6,3-2;1')).toBe(12);
    });
    
    
});
