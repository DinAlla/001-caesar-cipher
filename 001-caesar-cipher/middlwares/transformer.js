const {Transform} = require('readable-stream');
const {ACTION_TYPES} = require('../constants/constants');
const {encode} = require('./encode');
const {decode} = require('./decode');

class FilterBlastOutput extends Transform {
  constructor(argv) {
    super(argv);
    this.argv = argv;
  }

  _transform(chunk,encoding,callback) {
    if(chunk === '\u0003')
      process.exit();
    let row = chunk.toString();
    let encodedText, decodedText;
    if ((this.argv['action'] || this.argv['a']) === ACTION_TYPES[0]) {
      // call encode
      encodedText = encode(row, (this.argv['s'] || this.argv['shift']));
    } else {
      // call decode
      decodedText = decode(row, (this.argv['s'] || this.argv['shift']));
    }
    callback(null,
        this.argv['o'] || this.argv['output']
          ? decodedText || encodedText
          :`${this.argv['action'] || this.argv['a']}d text: ${decodedText || encodedText} Enter another text to ${this.argv['action'] || this.argv['a']} or stop process with CTRL + c\n`);
  }
}

module.exports = FilterBlastOutput;