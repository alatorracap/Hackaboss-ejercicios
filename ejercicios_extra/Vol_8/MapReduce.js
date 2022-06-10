/**
 * ##################
 * ## Ejercicio 2 ##
 * ##################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];
//
//- 1. Obtén la suma total de todas las edades de las personas.
//
console.log("#1- Suma de las edades");
let ageTotal = persons.reduce((total, person) => {
  return (total += person.age);
}, 0);
console.log("Total: ", ageTotal);
//
// - 2. Obtén la suma total de todas las edades de las personas francesas.
//
console.log("#2- Suma de las edades de las personas francesas");
let theFrench = persons.filter((person) => {
  return person.country === "FR";
});
theFrench = theFrench.reduce((total, person) => {
  return (total += person.age);
}, 0);
console.log("Total: ", theFrench);
//
// 3. Obtén un array con el nombre de todas las mascotas.
//
console.log("#3- Nombre de mascotas");
const pets = persons.map((owner) => {
  return owner.pet.name;
});
console.log("Mascotas:", pets);
//
// *  - 4. Obtén un array con las personas que tengan gato.
//
console.log("#4-Los Cat Lovers");
let catLovers = persons.filter((owner) => {
  return owner.pet.type === "gato";
});
console.log("Los cat lovers son:", catLovers);
//
// *  - 5. Obtén un array con los coches de los españoles.
//
console.log("#5-Carros de los Españoles: ");
let cochesES = persons.filter((esp) => {
  return esp.country === "ES";
});
cochesES = cochesES.map((coche) => {
  return coche.car;
});
console.log("Los Españoles tienen los siguientes coches: ", cochesES);
//
// *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
//
console.log("#6-Personas con Ford: ");

//filtra los coches para solo tener esos de marca ford
let fordIds = cars.filter((item) => {
  return item.brand === "Ford";
});
//limpia el resto de valores y solo deja el id
fordIds = fordIds.map((item) => {
  return item.id;
});
//transforma el objeto a JSON stringify para poder haccer una comparacion con .includes()
fordIds = JSON.stringify(fordIds);
/*
Debbug purposes
 console.log(fordIds);
console.log(persons.length);
 */

let filteredFord = persons.filter((item) => {
  return fordIds.includes(item.car);
});
console.log(filteredFord);
// *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
//          la info de su coche
/* 
            noot noot
                    \|
                        __
                     -=(o '.
                        '.-.\
                        /|  \\
                        '|  ||
                         _\_):,_

*/
