const {readInput} = require('./readInput');
const {actionParser} = require('./actionParser');
const { pipeline } = require('stream');
const transform_stream = require('./transformer');

const argvUsage = function (argv) {
  if (argv['i'] || argv['input']) {
    // call reader input file
    const successCallBack = (text) => actionParser(argv, text);
    readInput(argv['i'] || argv['input'], successCallBack);
  } else {
    // default input from console
    pipeline(
      process.stdin,
      new transform_stream(argv),
      process.stdout,
      err => {
        if(err) {
          console.log("Pipeline failed: ");
        } else {
          console.log('Pipeline succeeded.')
        }
      }
    )
  }
};

exports.argvUsage = argvUsage;