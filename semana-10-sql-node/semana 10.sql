-- semana 10

USE practica;

-- ejercicio 1
SELECT u.*, d.*
FROM usuarios AS u
LEFT  JOIN direcciones AS d ON u.dir_id = d.dir_id
ORDER BY u.id;

ALTER TABLE usuarios ADD COLUMN edad INT;


SELECT * FROM usuarios;
-- ejercicio 2
UPDATE usuarios SET edad = 18 WHERE usuarios.id = 1;
UPDATE usuarios SET edad = 44 WHERE usuarios.id = 2;
UPDATE usuarios SET edad = 22 WHERE usuarios.id = 3;
UPDATE usuarios SET edad = 69 WHERE usuarios.id = 4;
UPDATE usuarios SET edad = 50 WHERE usuarios.id = 5;

-- ejercicio 3
SELECT nombre, edad
FROM usuarios
ORDER BY edad DESC;

SELECT nombre, edad
FROM usuarios
WHERE edad=(
	SELECT MAX(edad)
	FROM usuarios);


