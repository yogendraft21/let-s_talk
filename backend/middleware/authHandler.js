const jwt = require('jsonwebtoken');
const statusCodes = require('../statusCodes');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json(statusCodes.TOKEN_NOT_PROVIDED);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json(statusCodes.TOKEN_EXPIRED);
    } else {
      return res.status(401).json(statusCodes.TOKEN_INVALID);
    }
  }
};

module.exports = authMiddleware;
