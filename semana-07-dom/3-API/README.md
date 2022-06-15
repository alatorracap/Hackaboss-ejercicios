# Ejercicio 3

Escribe una función que permita obtener usuarios aleatorios en un array de objetos, guardando de cada uno de ellos su nombre completo (nombre y apellido), país, email y un enlace a su foto de perfil.
El número de usuarios a obtener se deberá de poder introducir como un parámetro de dicha función.

Sirvete de la API: https://randomuser.me/api/

** Ejemplo input: ** 3.

** Ejemplo output: **

```javascript
[
  {
    nombreCompleto: "Brad Gibson",
    pais: "United States",
    email: "brad.gibson@example.com",
    foto: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    nombreCompleto: "Allen Stone",
    pais: "Ireland",
    email: "allen.Stone@example.com",
    foto: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    nombreCompleto: "Ceyhan Çevik",
    pais: "Turkey",
    email: "ceyhan.cevik@example.com",
    foto: "https://randomuser.me/api/portraits/women/54.jpg",
  },
];
```

Nota: Te recomiendo revisar la [documentación de la API](https://randomuser.me/documentation#multiple).

A continuación, crea otra función para añadir fichas de los usuarios obtenidos al main de index.html, de forma que las imagenes se vean, los nombres sean h2, los emails enlaces, y el país un texto normal, tal como se muestra en la imagen a continuación:

![imagen de ejemplo](./api-dom.JPG)

Para este ejercicio lo importante es ser capaces de obtener la información de una API y mostrarla en el DOM; sin embargo, ¡siempre es buen momento para practicar un poco de CSS!