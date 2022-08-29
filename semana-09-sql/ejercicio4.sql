-- para practicas, esta es 
CREATE DATABASE IF NOT EXISTS practica;

-- usando la database
USE practica;

-- crear tabla usuarios 
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  email VARCHAR(100),
  tel VARCHAR(20),
  dni VARCHAR(11),
  dir_id INT
);

-- ALTER TABLE usuarios MODIFY COLUMN dni VARCHAR(11);
-- crear tabla direcciones
CREATE TABLE direcciones(
  dir_id INT PRIMARY KEY,
  user_id INT,
  pais VARCHAR(75),
  cp CHAR(7),
  dir1 VARCHAR(100),
  dirdirecciones2 VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES usuarios(id)
);

 DROP TABLE direcciones;

-- meter datos a las tablas
INSERT INTO usuarios VALUES (1,"Irvin","Lethem","ilethem0@google.com.au","993870144","279948941-9", 1);
INSERT INTO usuarios VALUES (2,"Kylie","Mungan","kmungan1@howstuffworks.com","497494899","748551874-7", 2);
INSERT INTO usuarios VALUES (3,"Yul","Dibbert","ydibbert2@businesswire.com","776631050","215649413-4", 3);
INSERT INTO usuarios VALUES (4,"Tamra","Mc Gorley","tmcgorley3@studiopress.com","921948685","617064473-7", 4);
INSERT INTO usuarios VALUES (5,"Elmira","Imbrey","eimbrey4@cpanel.net","304168000","178988896-4", 5);
select * FROM usuarios;

INSERT INTO direcciones VALUES (1, 1, "Indonesia","83297","98339 Loftsgordon Road"  ,"Babakanbandung");
INSERT INTO direcciones VALUES (2, 2, "Philippines","44455","74641 Dwight Avenue","Bilar" );
INSERT INTO direcciones VALUES (3, 3, "Indonesia","62965","9510 Milwaukee Street","Sumberejo");
INSERT INTO direcciones VALUES (4, 4, "Norway","54756","8902 Doe Crossing Alley","Steinkjer");
INSERT INTO direcciones VALUES (5, 5, "United States","51471","8616 Stephen Hill","Charleston");
SELECT * FROM direcciones;
-- seleccionar datos
SELECT nombre, apellido, tel
  FROM usuarios
  ORDER BY apellido;