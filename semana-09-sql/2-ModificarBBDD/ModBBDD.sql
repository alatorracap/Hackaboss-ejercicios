
ALTER TABLE usuarios DROP COLUMN pais;
ALTER TABLE usuarios DROP COLUMN cp;
ALTER TABLE usuarios DROP COLUMN dir1;
ALTER TABLE usuarios DROP COLUMN dir2;

ALTER TABLE usuarios ADD COLUMN dir_id INT;
ALTER TABLE usuarios ADD FOREIGN KEY(dir_id) REFERENCES direcciones(id);

--revisar porque esta de verdad no lo entendi
CREATE TABLE direcciones(
  dir_id INT PRIMARY KEY,
  user_id INT,
  pais VARCHAR(75),
  cp CHAR(7),
  dir1 VARCHAR(100),
  dir2 VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES usuarios(id)
);