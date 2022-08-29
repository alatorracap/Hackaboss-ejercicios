'use strict';

const canEdit = (req, res, next) => {
  try {
    console.log('Middleware canEdit');
    // continuo
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = canEdit;
