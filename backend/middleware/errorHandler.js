const errorCodes = require('../utils/errorCodes');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.code && errorCodes[err.code]) {
    const error = errorCodes[err.code];
    res.status(400).json({ code: error.code, message: error.message });
  } else {
    res.status(500).json({ code: errorCodes.INTERNAL_SERVER_ERROR.code, message: errorCodes.INTERNAL_SERVER_ERROR.message });
  }
};

module.exports = errorHandler;
