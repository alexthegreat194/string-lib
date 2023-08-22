const { upperFirst, upperWords, allCaps, capitalizeWords, removeExtraSpaces, kebobCase, snakeCase, camelCase, makeHashTag, isStringEmpty, shift } = require('./strings');

test('upperFirst', () => {
    expect(upperFirst('hello')).toBe('Hello');
});

test('upperWords', () => {
    expect(upperWords('hello world')).toBe('Hello World');
});

test('allCaps', () => {
    expect(allCaps('hello world')).toBe('HELLO WORLD');
});

test('capitalizeWords', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('removeExtraSpaces', () => {
    expect(removeExtraSpaces(' hello  world ')).toBe('hello world');
});

test('kebobCase', () => {
    expect(kebobCase('hello world')).toBe('hello-world');
});

test('snakeCase', () => {
    expect(snakeCase('hello world')).toBe('hello-world');
});

test('camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
});

test('makeHashTag', () => {
    expect(makeHashTag('hello world')).toEqual(['#Hello', '#World']);
});

test('isStringEmpty', () => {
    expect(isStringEmpty('')).toBe(true);
    expect(isStringEmpty(' ')).toBe(true);
    expect(isStringEmpty('hello')).toBe(false);
});

test('shift', () => {
    expect(shift('hello', 3)).toBe('lohel');
});