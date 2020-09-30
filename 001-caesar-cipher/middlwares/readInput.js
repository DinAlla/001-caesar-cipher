const fs = require('fs');
const {parseSystemErrors} = require('./parseSystemErrors');

const readInput = function (filePath, successCallback) {
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
      successCallback(data);
    } else {
      parseSystemErrors(err.code);
      process.exit(0);
    }
  });
};

exports.readInput = readInput;