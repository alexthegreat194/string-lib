# string-lib-alexharlan: A String Manipulation Library for JavaScript

string-lib-alexharlan is a JavaScript library designed to simplify common string manipulation tasks. It provides a collection of utility functions that facilitate various string transformations and modifications. From converting case formats to removing extra spaces, StringLib offers a range of tools to enhance your string handling in JavaScript projects.

## Functions

### `upperFirst(str)`

Converts the first character of a string to uppercase and leaves the rest unchanged.

### `upperWords(str)`

Converts the first character of each word in a string to uppercase.

### `allCaps(str)`

Converts the entire string to uppercase.

### `capitalizeWords(str)`

Converts the first character of each word in a string to uppercase (similar to `upperWords`).

### `removeExtraSpaces(str)`

Removes extra spaces from the beginning, end, and between words in a string.

### `kebobCase(str)`

Converts a string to kebab case format by replacing spaces with hyphens.

### `snakeCase(str)`

Converts a string to snake case format by replacing spaces with underscores.

### `camelCase(str)`

Converts a string to camel case format by removing spaces and capitalizing the first letter of each word except the first.

### `shift(str, num)`

Shifts the characters of a string to the right by a given number of positions.

### `makeHashTag(str)`

Generates an array of up to three hashtag strings from the most significant words in the input string.

### `isStringEmpty(str)`

Checks if a string is empty or consists only of whitespace characters.

## Usage

Here's an example of how to use StringLib functions:

```javascript
const stringLib = require('./stringLib'); // Replace with the correct path to your stringLib module

const inputString = 'hello world';
const upperCased = stringLib.allCaps(inputString);
console.log(upperCased); // Output: 'HELLO WORLD'

const kebabFormatted = stringLib.kebobCase('This is a Test String');
console.log(kebabFormatted); // Output: 'this-is-a-test-string'
