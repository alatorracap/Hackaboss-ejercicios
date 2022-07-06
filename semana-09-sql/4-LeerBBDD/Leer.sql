SELECT nombre, apellido, tel
  FROM usuarios
  ORDER BY apellido ASC;

SELECT count(pais), pais
FROM direcciones
GROUP BY pais;