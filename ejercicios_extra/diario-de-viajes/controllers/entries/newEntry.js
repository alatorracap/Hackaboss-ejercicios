'use strict';

const getDB = require('../../db/db');
const { formatDateToDB, savePhoto } = require('../../helpers');

const newEntry = async (req, res, next) => {
  let connection;
  try {
    // pido conneción al DB
    connection = await getDB();

    // voy a leed del body place y description
    const { place, description } = req.body;

    // controlo que exista place
    if (!place) {
      const error = new Error("El campo 'place' es obligatorio");
      error.httpStatus = 400;
      throw error;
    }

    // guardo fecha para DB
    const now = new Date();

    // hago insert en el BD de la entry
    // Uso prepare statement
    const [result] = await connection.query(
      `
        INSERT INTO entries (date, place, description, user_id)
        VALUES (?,?,?,?);
    `,
      [formatDateToDB(now), place, description, req.headers.authorization]
    );

    //console.log('result', result);

    // guardo el id de la entry
    const { insertId } = result;

    //console.log(req.files);

    // verifico si tengo que procesar immagenes
    if (req.files && Object.keys(req.files).length > 0) {
      //console.log(Object.values(req.files));
      for (const photosData of Object.values(req.files).slice(0, 3)) {
        // guardo la imagen en el disco
        const photoName = await savePhoto(photosData);

        //console.log('photoName', photoName);

        // insert de la imagen en el DB
        await connection.query(
          `
            INSERT INTO entries_photos (uploadDate, photo, entry_id)
            VALUES (?,?,?)
        `,
          [formatDateToDB(now), photoName, insertId]
        );
      }
    }

    res.send({
      status: 'ok',
      message: 'New entry',
      data: {
        id: insertId,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = newEntry;
