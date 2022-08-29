'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');

const { newUser } = require('./controllers/users');
const {
  newEntry,
  getEntry,
  listEntries,
  editEntry,
} = require('./controllers/entries');

// middlewares
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const isUser = require('./middlewares/isUser');
const entryExist = require('./middlewares/entryExist');
const canEdit = require('./middlewares/canEdit');

const { PORT, UPLOAD_DIRECTORY } = process.env;

// creo instancia de express
const app = express();

// añado middleware morgan para el log de las peticiones HTTP
app.use(morgan('dev'));

// middleware para parsear el json del body
app.use(express.json());

// middleware de recursos staticos
// EJ: http://localhost:3000/upload_0dda21dd-119a-484a-8f47-be7923259282_img.jpg
app.use(express.static(path.join(__dirname, UPLOAD_DIRECTORY)));

// añado middleware para parsear las imagenes en el body (alternativa: multer)
app.use(fileUpload());

/***************************** END POINTS  **/

// *************************** USERS

// POST - /users - Crear un usuario pendiente de activar
app.post('/users', newUser);

// *************************** ENTRIES

// POST - /entries - crea una entrada Token obligatorio
app.post('/entries', isUser, newEntry);

//GET - /entries - JSON con lista todas las entradas y buscar entradas | Sin token
app.get('/entries', listEntries);

//GET - /entries/:id - JSON que muestra información de una entrada | Sin token
app.get('/entries/:id', getEntry);

// PUT - /entries/:id - edita el lugar o descripción de una entrada | Token obligatorio y mismo usuario (o admin)
app.put('/entries/:id', isUser, entryExist, canEdit, editEntry);

// middleware de los errores
app.use((error, req, res, next) => {
  res.status(error.httpStatus || 500).send({
    status: 'error',
    message: error.message,
  });
});

// middleware 404 not found
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

// pondo en escucha express
app.listen(PORT, () => {
  console.log(`Servidor activo en http://127.0.0.1:${PORT}`);
});
