const {readInput} = require('./readInput');
const {actionParser} = require('./actionParser');

const argvUsage = function (argv) {
  if (argv['i'] || argv['input']) {
    // call reader input file
    const successCallBack = (text) => actionParser(argv, text);
    readInput(argv['i'] || argv['input'], successCallBack);
  } else {
    // default input from console

    read({ prompt : 'Text: ' }, async function (err, text) {
      if (text) {
        // call action
        await actionParser(argv, text);
      }
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
};

exports.argvUsage = argvUsage;