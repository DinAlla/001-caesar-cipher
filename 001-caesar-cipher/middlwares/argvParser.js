const {ADMISSIBLE_SHORT_OPTIONS, ADMISSIBLE_LONG_OPTIONS, ACTION_TYPES} = require('../constants/constants');

const argvParser = function (argv) {
  const errors = [];
  const keys = Object.keys(argv);
  ADMISSIBLE_SHORT_OPTIONS.forEach((option, i) => {
    if (!keys.includes(option) && !keys.includes(ADMISSIBLE_LONG_OPTIONS[i])) {
      errors.push(`Option "${option}" or "${ADMISSIBLE_LONG_OPTIONS[i]}" is required.`);
    }
  });
  if (!errors.length) {
    const typeAction = (argv['a'] || argv['action']);
    if (!ACTION_TYPES.includes(typeAction)) {
      errors.push('Invalid type of action.');
    }

    const shiftCount = (argv['s'] || argv['shift']);
    if (isNaN(+shiftCount)) {
      errors.push('Invalid type of shift.');
    }
  }
  return errors;
};

exports.argvParser = argvParser;
