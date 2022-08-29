'use strict';

// script que se ocupará de crear las tablas y añadir datos

// IMPORTANTE
// Ejecución: node./db/initDB.js
// Esto no funcionaría: node ./initDB.js

// node initDB.js
require('dotenv').config();
const { formatDateToDB } = require('../helpers');

const getDB = require('./db');

let connection;

async function main() {
  try {
    //DEBUG
    //console.log(process.env.MYSQL_USER);

    connection = await getDB();

    // CREO LAS TABLAS
    console.log('Borrando las tablas...');

    await connection.query('DROP TABLE IF EXISTS entries_photos;');
    await connection.query('DROP TABLE IF EXISTS entries_votes;');
    await connection.query('DROP TABLE IF EXISTS entries;');
    await connection.query('DROP TABLE IF EXISTS users;');

    // CREO LAS TABLAS
    console.log('Creando las tablas...');

    // Tabla usuarios
    await connection.query(`
    CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      date DATETIME NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(512) NOT NULL,
      name VARCHAR(100),
      avatar VARCHAR(50),
      active BOOLEAN DEFAULT false,
      role ENUM("admin", "normal") DEFAULT "normal" NOT NULL,
      registrationCode VARCHAR(100),
      deleted BOOLEAN DEFAULT false,
      lastAuthUpdate DATETIME,
      recoverCode VARCHAR(100)
    )
  `);

    // Tabla entries
    await connection.query(`
     CREATE TABLE entries (
       id INT PRIMARY KEY AUTO_INCREMENT,
       date DATETIME NOT NULL,
       place VARCHAR(100) NOT NULL,
       description TEXT,
       user_id INT NOT NULL,
       FOREIGN KEY (user_id) REFERENCES users(id)
     );
   `);

    // Tabla entries_photos
    await connection.query(`
      CREATE TABLE entries_photos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        uploadDate DATETIME NOT NULL,
        photo VARCHAR(100) NOT NULL,
        entry_id INT NOT NULL,
        FOREIGN KEY (entry_id) REFERENCES entries(id)
      );
    `);

    // Tabla entries_votes
    await connection.query(`
       CREATE TABLE entries_votes (
         id INT PRIMARY KEY AUTO_INCREMENT,
         date DATETIME NOT NULL,
         vote TINYINT NOT NULL,
         entry_id INT NOT NULL,
         FOREIGN KEY (entry_id) REFERENCES entries(id),
         CONSTRAINT entries_votes_CK1 CHECK (vote IN (1,2,3,4,5)),
         user_id INT NOT NULL,
         FOREIGN KEY (user_id) REFERENCES users(id)
         -- CONSTRAINT uc_user_entry UNIQUE (user_id , entry_id)
       );
     `);

    console.log('Creo usuario admin...');
    await connection.query(`
     INSERT INTO users(date, email, password, name, active, role)
     VALUES (
      "${formatDateToDB(new Date())}",
      "stefano.peraldini@hackaboss.com",
      SHA2("${process.env.ADMIN_PASSWORD}", 512),
      "Stefano Peraldini",
      true,
      "admin"
     )
     `);
    console.log('Creo usuario de prueba...');
    // FIXME: eliminar cuando tendremos implementada la creación de un usuario
    await connection.query(`
     INSERT INTO users(date, email, password, name, active)
     VALUES (
      "${formatDateToDB(new Date())}",
      "stefano.peraldini@gmail.com",
      SHA2("${process.env.USER_PASSWORD}", 512),
      "Stefano Peraldini",
      true
     )
     `);
  } catch (error) {
    console.error('ERROR:', error.message);
  } finally {
    // libero la connección
    if (connection) {
      connection.release();
    }
    process.exit();
  }
}

main();
