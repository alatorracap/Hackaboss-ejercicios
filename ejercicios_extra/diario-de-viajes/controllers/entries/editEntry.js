'use strict';

const getDB = require('../../db/db');

const editEntry = async (req, res, next) => {
  let connection;
  try {
    // pido conneción al DB
    connection = await getDB();

    // CODIGO

    res.send({
      status: 'ok',
      message: 'editEntry',
      data: {},
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = editEntry;
