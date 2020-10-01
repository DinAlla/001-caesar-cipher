const {ACTION_TYPES} = require('../constants/constants');
const {encode} = require('./encode');
const {decode} = require('./decode');
const {output} = require('./output');

const actionParser = async (argv, textToParse) => {
  let encodedText, decodedText;
  if ((argv['action'] || argv['a']) === ACTION_TYPES[0]) {
    // call encode
    encodedText = await encode(textToParse, (argv['s'] || argv['shift']));
  } else {
    // call decode
    decodedText = await decode(textToParse, (argv['s'] || argv['shift']));
  }
  // call output file
  output(argv, encodedText || decodedText);
};

exports.actionParser = actionParser;