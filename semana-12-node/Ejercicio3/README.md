# Ejercicio node 3

Partiendo del ejercicio anterior:

- Crea un middleware que "proteja" la ruta `/new` para que solo permita crear un nuevo evento si se manda un campo extra en el body con el nombre `secret` con un valor específico secreto establecido por ti.
- Bonus: el valor correcto del campo `secret` no puede estar escrito en el código JS si no en un archivo `.env` aparte. Usa el módulo _dotenv_ para leer ese archivo.
