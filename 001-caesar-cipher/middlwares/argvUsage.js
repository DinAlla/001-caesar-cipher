const {readInput} = require('./readInput');
const {actionParser} = require('./actionParser');
const read = require('read');

const argvUsage = function (argv) {
  if (argv['i'] || argv['input']) {
    // call reader input file
    const successCallBack = (text) => actionParser(argv, text);
    readInput(argv['i'] || argv['input'], successCallBack);
  } else {
    // default input from console
    read({ prompt : 'Text: ' }, function (err, text) {
      if (text) {
        // call action
        actionParser(argv, text);
      }
      if (err) {
        console.error(err);
        process.exit(0);
      }
    })
  }
};

exports.argvUsage = argvUsage;