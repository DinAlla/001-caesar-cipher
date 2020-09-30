const parseSystemErrors = (err) => {
  switch (err) {
    case 'EACCES':
      console.error('Permission denied.');
      break;
    case 'EADDRINUSE':
      console.error('Address already in use.');
      break;
    case 'ECONNREFUSED':
      console.error('Connection refused.');
      break;
    case 'ECONNRESET':
      console.error('Connection reset by peer.');
      break;
    case 'EEXIST':
      console.error('File exists.');
      break;
    case 'EISDIR':
      console.error('Is a directory.');
      break;
    case 'EMFILE':
      console.error('Too many open files in system.');
      break;
    case 'ENOENT':
      console.error('No such file or directory.');
      break;
    case 'ENOTDIR':
      console.error('Not a directory.');
      break;
    case 'ENOTEMPTY':
      console.error('Directory not empty.');
      break;
    case 'ENOTFOUND':
      console.error('DNS lookup failed.');
      break;
    case 'EPERM':
      console.error('Operation not permitted.');
      break;
    case 'EPIPE':
      console.error('Broken pipe.');
      break;
    case 'ETIMEDOUT':
      console.error('Operation timed out.');
      break;
  }
};

exports.parseSystemErrors = parseSystemErrors;