'use strict';

// puntuaciones
const puntuaciones = [
  {
    equipo: 'Toros Negros',
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: 'Amanecer Dorado',
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: 'Águilas Plateadas',
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: 'Leones Carmesí',
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: 'Rosas Azules',
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: 'Mantis Verdes',
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: 'Ciervos Celestes',
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: 'Pavos Reales Coral',
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: 'Orcas Moradas',
    puntos: [2, 3, 3, 4],
  },
];
/* 
Edita el archivo script.js para crear una función que reciba una array de objetos 
(equipos y puntos conseguidos) y muestre por consola el ** nombre ** del que más 
y del que menos puntos hayn conseguido, con sus respectivos ** totales **.
*/
/* function points(theArray) {
  let sumas = [];
  let result = theArray.reduce((count, currItem) => {
    //console.log(currItem.puntos);

    sumas = currItem.puntos.reduce((inCount, inItem) => {
      return (inCount += inItem);
    }, 0);

    console.log(sumas);

    return (count += currItem.puntos);
  }, 0); 
    .reduce((sum, it) => {
      return (sum += it);
    }, 0) 

  return result;
} 
*/

function pointSystem(teamsArray) {
  let teamPoints = teamsArray
    .map((team) => {
      return {
        equipo: team.equipo,
        total: team.puntos.reduce((teamTot, number) => {
          teamTot + number;
        }),
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });
  return teamPoints;

  /*   console.log(
    `El ganador es ${teamPoints[0].equipo} con ${teamPoints[0].total}`
  ); */
}
// pointSystem(puntuaciones);
console.log(pointSystem(puntuaciones));
// console.log(points(puntuaciones));
