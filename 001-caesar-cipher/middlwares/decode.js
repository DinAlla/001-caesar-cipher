const {ALPHABET} = require('../constants/alphabet');
const {isUpperCase} = require('./isUppercase');

const decode = function (defaultText, shift) {
  let out = '';

  for (let i=0; i< defaultText.length; i++) {
    const defTextIndex = ALPHABET.indexOf(defaultText[i]);
    if (ALPHABET.includes(defaultText[i].toLowerCase())) {
      let indexOutput = defTextIndex - shift;
      if (defTextIndex - shift < 0) {
        indexOutput = ALPHABET.length + (defTextIndex - shift);
      }
      if (isUpperCase(defaultText[i])) {
        out += ALPHABET[indexOutput].toUpperCase()
      } else {
        out += ALPHABET[indexOutput]
      }
    } else {
      out += defaultText[i]
    }
  }
  return out;
};

exports.decode = decode;