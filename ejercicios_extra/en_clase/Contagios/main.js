"use strict";

// "Empezamos con un array ([true, false, true, false, false, false, true, true]),
// las posiciones con false están sanas, las que tienen true son contagiosas.
// Necesitamos una función que nos diga los contagiados el día siguiente,
// cada enfermo contagiará a los que se encuentran justo a su lado."

//FALSE - SANO
//TRUE - MALITO

const patients = [true, false, true, false, false, false, true, true];

// const result = [true, true, true, true, false, true, true, true];

function contagios(paciente) {
  //copia a cambiar
  const patientCopy = [...paciente];

  //for que va por el array
  for (let i = 0; i < patients.length; i++) {
    //revisar si es primera posicion 0
    if (i !== 0) {
      //revisa que el paciente no este infectado
      if (paciente[i] !== true) {
        //revisa que los lados esten infectados
        if (paciente[i + 1] === true || paciente[i - 1] === true) {
          patientCopy[i] = true;
        }
      }
    } else {
      if (paciente[i] !== true) {
        if (paciente[i + 1] === true) {
          patientCopy[i] = true;
        }
      }
    }
  }
  console.log(patientCopy);
  //return patientCopy;
}
contagios(patients);
/* console.log(contagios(patients));
 */
