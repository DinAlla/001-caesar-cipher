const {readInput} = require('./readInput');
const {actionParser} = require('./actionParser');
const { pipeline } = require('stream');
const transform_stream = require('./transformer');

const fs = require('fs');

const argvUsage = function (argv) {
  if (argv['i'] || argv['input']) {
    // call reader input file
    const successCallBack = (text) => actionParser(argv, text);
    readInput(argv['i'] || argv['input'], successCallBack);
  } else {
    // default input from console
    try {
      pipeline(
          process.stdin,
          new transform_stream(argv),
          argv['o'] || argv['output'] ? fs.createWriteStream(argv['o'] || argv['output'], {flags: 'a'}) : process.stdout,
          err => {
            if (err) {
              console.log("Pipeline failed: ");
              process.exit(1);
            } else {
              console.log('Pipeline succeeded.')
            }
          }
      )
    } catch {
      process.exit(1);
    }
  }
};

exports.argvUsage = argvUsage;