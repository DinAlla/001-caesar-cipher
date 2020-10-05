const fs = require('fs');

const output = (argv, outputText) => {
  const path = argv['o'] || argv['output'];
  if (path) {
    try {
      if (fs.existsSync(path)) {
        //file exists
        fs.appendFile(path, outputText, function(error){

          if(error) throw error;
          console.log("\n" +
              "Asynchronous file writing completed. File contents:");
          let data = fs.readFileSync(path, "utf8");
          console.log(data);
        });
      } else {
        fs.open(path, 'w', (err) => {
          if(err) throw err;
          console.log('File created');
        });
        fs.appendFile(path, outputText, function(error){

          if(error) throw error;
          console.log("\n" +
              "Asynchronous file writing completed. File contents:");
          let data = fs.readFileSync(path, "utf8");
          console.log(data);
        });
      }
    } catch(err) {
      console.error(err);
      process.exit(1);
    }
  } else {
    console.log(outputText, 'outputText');
  }
};

exports.output = output;