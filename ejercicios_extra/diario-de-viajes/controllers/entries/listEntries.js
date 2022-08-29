'use strict';

const getDB = require('../../db/db');

const listEntry = async (req, res, next) => {
  let connection;
  try {
    // pido conneción al DB
    connection = await getDB();

    const { search, order, direction } = req.query;

    //console.log(search, order, direction);
    const validatorOrderField = ['place', 'date', 'votes'];
    const orderBy = validatorOrderField.includes(order) ? order : 'place';

    const validatorDirectionField = ['ASC', 'DESC'];
    const orderDirection = validatorDirectionField.includes(direction)
      ? direction
      : 'ASC';

    let entries;
    // FIXME: gestionar los votos
    if (search) {
      [entries] = await connection.query(
        `
        SELECT id, date, place, user_id AS "owner"
        FROM entries
        WHERE place LIKE ? OR description LIKE ?
        ORDER BY ${orderBy} ${orderDirection}
      `,
        [`%${search}%`, `%${search}%`]
      );
    } else {
      [entries] = await connection.query(`
        SELECT id, date, place, user_id AS "owner"
        FROM entries
        ORDER BY ${orderBy} ${orderDirection}
      `);
    }

    //console.log(entries);

    let entriesWithPhotos;

    if (entries.length > 0) {
      // sacar los id
      const arrayIds = entries.map((entry) => {
        return entry.id;
      });

      // seleciono todas las fotos que tenga como id de la entry los id que estan en arrayIds
      const [photos] = await connection.query(`
        SELECT *
        FROM entries_photos
        WHERE entry_id IN (${arrayIds.join(',')})
      `);

      // juntamos los dos resultados anteriores (entry+fotos)
      entriesWithPhotos = entries.map((entry) => {
        const photosEntry = photos.filter((photo) => {
          return photo.entry_id === entry.id;
        });

        return {
          ...entry,
          photos: photosEntry,
        };
      });
    }

    res.send({
      status: 'ok',
      message: 'List entry',
      data: entriesWithPhotos,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = listEntry;
