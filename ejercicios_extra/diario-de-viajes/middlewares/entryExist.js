'use strict';

const entryExist = (req, res, next) => {
  try {
    console.log('Middleware entryExist');
    // continuo
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = entryExist;
