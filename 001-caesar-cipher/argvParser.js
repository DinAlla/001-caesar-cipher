const {ADMISSIBLE_SHORT_OPTIONS, ADMISSIBLE_LONG_OPTIONS} = require('./constants');

const argvParser = function (argv) {
  const errors = [];
  const keys = Object.keys(argv);
  ADMISSIBLE_SHORT_OPTIONS.forEach((option, i) => {
    if (!keys.includes(option) || !keys.includes(ADMISSIBLE_LONG_OPTIONS[i])) {
      errors.push(`Option "${option}" or "${ADMISSIBLE_LONG_OPTIONS[i]}" is required.`);
    }
  });
  return errors;
};

exports.argvParser = argvParser;
