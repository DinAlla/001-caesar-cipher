const {ALPHABET} = require('../constants/alphabet');

const encode = function (defaultText, shift) {
  let out = '';
  for (let i=0; i< defaultText.length; i++) {
    const defTextIndex = ALPHABET.indexOf(defaultText[i]);
    if (ALPHABET.includes(defaultText[i].toLowerCase())) {
        let indexOutput = defTextIndex + shift;
        if (defTextIndex + shift >= ALPHABET.length) {
          indexOutput = defTextIndex + shift - ALPHABET.length;
        }
        out += ALPHABET[indexOutput]
    } else {
      out += defaultText[i]
    }
  }
  return out;
};

exports.encode = encode;