const {ACTION_TYPES} = require('../constants/constants');

const actionParser = (argv, textToParse) => {
  if ((argv['action'] || argv['a']) === ACTION_TYPES[0]) {
    // call encode
    console.log('encode');
  } else {
    // call decode
    console.log('decode');
  }

  if (argv['o'] || argv['output']) {
    // call output file
  }
};

exports.actionParser = actionParser;