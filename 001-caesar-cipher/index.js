const argv = require('minimist')(process.argv.slice(2));
const {argvParser} = require('./middlwares/argvParser');
const {argvUsage} = require('./middlwares/argvUsage');

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

const errors = argvParser(argv);

if (errors.length) {
  errors.forEach(error => console.error(error));
  process.exit(1);
} else {
  argvUsage(argv)
}