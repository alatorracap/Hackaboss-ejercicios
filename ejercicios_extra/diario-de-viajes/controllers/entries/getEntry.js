'use strict';

const getDB = require('../../db/db');

const getEntry = async (req, res, next) => {
  let connection;
  try {
    // pido conneción al DB
    connection = await getDB();

    // leer id desde url params
    //const id = req.params.id;
    const { id } = req.params;

    // query para sacar los datos de la entry
    // FIXME: gestionar la media de los votos
    const [result] = await connection.query(
      `
      SELECT id, date, place, description, user_id AS "owner"
      FROM entries
      WHERE entries.id = ?
    `,
      [id]
    );

    //console.log(result);

    // query para sacar las fotos de la entry
    const [photos] = await connection.query(
      `
        SELECT id,uploadDate,photo
        FROM entries_photos
        WHERE entry_id=?
      `,
      [id]
    );

    // devuelvo los datos de la entry
    res.send({
      status: 'ok',
      message: 'Message',
      data: {
        ...result[0],
        photos,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getEntry;
