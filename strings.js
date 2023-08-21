function upperFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
   
function upperWords(str) {
    return str.split(' ').map(upperFirst).join(' ');
}

function allCaps(str) {
    return str.toUpperCase();
}

function capitalizeWords(str) {
    return str.split(' ').map(upperFirst).join(' ');
}

function removeExtraSpaces(str) {
    return str.trim().replace(/\s+/g, ' ');
}

function kebobCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

function snakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}

function camelCase(str) {
    return str.split(' ').map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return upperFirst(word);
    }).join('');
}

function shift(str, num) {
    let shift = num % str.length;
    return str.slice(shift) + str.slice(0, shift);
}

function makeHashTag(str) {
    return str.split(' ').map(upperFirst).join('').slice(0, 140);
}

function isEmpty(str) {
    return str.trim().length === 0;
}
