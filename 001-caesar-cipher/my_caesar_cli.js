const argv = require('minimist')(process.argv.slice(2));
const {argvParser} = require('./argvParser');

const errors = argvParser(argv);
if (errors.length) {
  errors.forEach(error => console.error(error));
  /* process.exit();
  process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  }); */
}