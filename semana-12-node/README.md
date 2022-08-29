# Ejercicio node 1

- Crea una base de datos en tu servidor MySQL con el nombre que quieras.
- Crea un proyecto de node con un archivo initDB.js que al ejecutarse cree las siguientes tablas en la base de datos con sus campos y tipos correspondientes usando SQL:
  - users
    - id (number)
    - email (text)
    - name (text)
    - registration_date (datetime)
    - active (boolean)
  - photos
    - id (number)
    - user_id (number)
    - photo_file_name (text)
    - creation_date (datetime)
  - likes
    - id (number)
    - user_id (number)
    - photo_id (number)
    - creation_date (datetime)
- Establece las relaciones entre las tablas que consideres necesarias usando SQL
- Antes de crear estas tablas el programa de node debe borrar cualquier otra tabla con el mismo nombre pre-existente en la base de datos.

# Ejercicio node 2

- En los ejercicios de la anterior semana había un ejercicio que proponía crear un programa de node que guardara en un archivo json información de fechas y eventos. Este programa funcionaba usando el terminal. Esta semana tienes que hacer una API en express que haga lo mismo pero usando peticiones HTTP. Tienes que crear estas rutas:
  - GET a la ruta `/list`: devuelve un JSON con todos los eventos guardados en el archivo
  - POST a la ruta `/new`: guarda un nuevo evento en el archivo, tienes que enviar los datos necesarios (fecha y evento) usando el body de la petición.
- Bonus: validar con joi que los datos enviados a la ruta `/new` tienen un formato correcto.

# Ejercicio node 3

Partiendo del ejercicio anterior:

- Crea un middleware que "proteja" la ruta `/new` para que solo permita crear un nuevo evento si se manda un campo extra en el body con el nombre `secret` con un valor específico secreto establecido por ti.
- Bonus: el valor correcto del campo `secret` no puede estar escrito en el código JS si no en un archivo `.env` aparte. Usa el módulo _dotenv_ para leer ese archivo.
