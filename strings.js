function upperFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function upperWords(str) {
  if (str.length === 0) {
    return '';
  }
  return str.split(' ').map(upperFirst).join(' ');
}

function allCaps(str) {
  return str.toUpperCase();
}

function capitalizeWords(str) {
  return str.split(' ').map(upperFirst).join(' ');
}

function removeExtraSpaces(istr) {
  let str = istr.trim();
  if (str.length === 0) {
    return '';
  }
  if (str.length < 2) {
    return str;
  }

  if (str[0] === ' ') {
    str = str.slice(1);
  }
  if (str[str.length - 1] === ' ') {
    str = str.slice(0, -1);
  }

  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] !== ' ' || str[i] !== ' ') {
      result += str[i];
    }
  }
  return result;
}

function kebobCase(str) {
  return removeExtraSpaces(str).replace(/\s+/g, '-').toLowerCase();
}

function snakeCase(str) {
  return removeExtraSpaces(str).replace(/\s+/g, '-').toLowerCase();
}

function camelCase(str) {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return upperFirst(word);
    })
    .join('');
}

function shift(str, num) {
  const s = num % str.length;
  return str.slice(s) + str.slice(0, s);
}

function makeHashTag(str) {
  const words = str
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .splice(0, 3);
  return words.map((word) => `#${upperFirst(word)}`);
}

function isStringEmpty(str) {
  return str.trim().length === 0;
}

module.exports = {
  upperFirst,
  upperWords,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isStringEmpty,
};
