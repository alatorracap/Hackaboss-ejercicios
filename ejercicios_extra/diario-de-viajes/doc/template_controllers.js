'use strict';

const getDB = require('../../db/db');

const nameControllador = async (req, res, next) => {
  let connection;
  try {
    // pido conneción al DB
    connection = await getDB();

    // CODIGO

    res.send({
      status: 'ok',
      message: 'Message',
      data: {},
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = nameControllador;
