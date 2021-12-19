// shell color utils

exports.info = t => {
  return '\033[34m' + t + '\033[39m ';
};

exports.success = t => {
  return '\033[32m' + t + '\033[39m';
};

exports.error = t => {
  return '\033[91m' + t + '\033[39m';
};

exports.reset = t => {
  return '\033[39m' + t;
};
