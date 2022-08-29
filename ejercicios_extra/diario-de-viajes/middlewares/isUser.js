'use strict';

const isUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    // si no tengo Authorization salgo con un error
    if (!authorization) {
      const error = new Error('Falta la cabecera de autorización');
      error.httpStatus = 401;
      throw error;
    }
    // continuo
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isUser;
