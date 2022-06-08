'use strict';

const datos = {
  empresa: 'ACME',
  nif: '12345678Z',
  plantas: [
    { nombre: 'Lugo', empleados: 7 },
    { nombre: 'Huesca', empleados: 3 },
    { nombre: 'Teruel', empleados: 5 },
  ],
  directiva: [
    { nombre: 'Ada', sexo: 'F', edad: 35 },
    { nombre: 'Bruno', sexo: 'M', edad: 27 },
    { nombre: 'Carla', sexo: 'F', edad: 25 },
    { nombre: 'David', sexo: 'M', edad: 50 },
  ],
};

// Ej1: ¿Cuántos directivos hay de sexo masculino?
//   "Numero de directivos de sexo M:",
let masc = datos.directiva.filter((persona) => {
  return persona.sexo === 'M';
}).length;
console.log(`#1 Directivos de sexo masculino: ${masc}`);

// Ej2: ¿Nombres de los directivos mayores de 30?

let mayores30 = datos.directiva
  .filter((person) => {
    return person.edad > 30;
  })
  .map((person) => {
    return person.nombre;
  });
console.log('#2 ', mayores30);

// const datos2 = [
//   { nombre: "Ada", sexo: "F", edad: 35 },
//   { nombre: "Bruno", sexo: "M", edad: 27 },
//   { nombre: "Carla", sexo: "F", edad: 25 },
//   { nombre: "David", sexo: "M", edad: 50 },
// ];

// Ej3: ¿Cuántos empleados hay en Lugo?
const lugo = console.log(
  '#3 Empleados en Lugo: ',
  datos.plantas.filter((planta) => {
    return planta.nombre === 'Lugo';
  })[0].empleados
);

// Ej4: ¿Qué posición en la lista ocupa Carla?
console.log(
  '#4 Carla esta en la posicion: ',
  datos.directiva.findIndex((index) => {
    return index.nombre === 'Carla';
  })
);

// Ej5: Total de empleados

console.log(
  '#5 Total de los empleados: ',
  datos.plantas.reduce((count, item) => {
    return count + item.empleados;
  }, 0)
);

// Ej6: Suma de las edades de las mujeres de la directiva

let femAge = datos.directiva.filter((persona) => {
  return persona.sexo === 'F';
});
femAge = femAge.reduce((tot, per) => {
  return tot + per.edad;
}, 0);
console.log('#6 Total de edad de las mujeres es: ', femAge);

// Ej7: Media de las edades de las mujeres de la directiva

const carrera = [
  { nombre: 'Alice', tiempo: 16.5, posAnterior: 2, posActual: 2 },
  { nombre: 'Bob', tiempo: 17, posAnterior: 1, posActual: 4 },
  { nombre: 'Carol', tiempo: 19, posAnterior: 3, posActual: 3 },
  { nombre: 'Dave', tiempo: 21.3, posAnterior: 5, posActual: 1 },
  { nombre: 'Eve', tiempo: 30.1, posAnterior: 4, posActual: 5 },
];

// Ej8: Corredores que quedaron en la misma posición el año pasado
//      (ojo: posAnterior cuenta a partir de 1, no de 0...)

let runners = carrera.filter((runner) => {
  return runner.posAnterior === runner.posActual;
});
console.log('#8 Corredor:\n ', runners);

// Ej9: Sabiendo que las chicas ocupan las posiciones pares, listar sólo sus nombres.
//posiciones en la lista o... en la carrera?
let par = carrera.filter((runner, pos) => {
  return runner.posAnterior % 2 === 0;
});
par = par.map((runner) => {
  return runner.nombre;
});

console.log(`#9 Posiciones pares: \n ${par}`);
// Ej10: Reescribe el ej. 5 usando reduce.

// Ej11: Reescribe el ej. 6 usando reduce.

// Ej12: Reescribe el ej. 7 usando reduce.

// Ej13: Ordena la directiva por edad, empezando por el más joven.

let ageOrder = datos.directiva.sort((a, b) => {
  return a.edad - b.edad;
});

ageOrder = ageOrder.map((item) => {
  return item.nombre;
});
console.log(`#13 orden por edad: \n ${ageOrder}`);
