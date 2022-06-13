"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

/*
ignorar esto porque al parecer mi comprecion lectora es nula
function confirmLetter(dni) {
  
  console.log("DNI", dni, typeof dni);
  dni = dni.slice(0, 8);
  console.log("DNI Cortado", dni, typeof dni);
  // dni = parseInt(dni);
  let total = 0;
  for (let i = 0; i <= 7; i++) {
    total += parseInt(dni.charAt(i));
  }

  let letterMod = total % 23;
  const DniLetter = letras[letterMod];

  console.log("MOD", letterMod, DniLetter);
  return total;
} 
//debug confirm letter section
// 55478266 = 43
// letra n
*/

//console.log(confirmLetter("55478266-N"));

function dniVerifier(dni) {
  //confirma que el dni es un string

  let myError;
  // console.log(dni);
  try {
    //1- Lo que se ha introducido es un string con 10 caracteres.

    if (parseInt(dni.length) !== 10) {
      myError = new Error("Tiene que ser 10 caracteres");
      throw myError;
    }
    //2- Si separamos por el guión tiene dos partes.
    if (dni.charAt(8) !== "-") {
      myError = "El DNI debe contener un '-' separando los numeros de la letra";
      throw myError;
    }
    // console.log(typeof dni.slice(0, 8));
    //3- La primera parte (antes del guion) son 8 números.
    if (dni.indexOf("-") !== 8) {
      myError = new Error("La primera parte deben ser 8 numeros");
      throw myError;
    }
    // 4- La segunda parte (después del guion) es un único caracter y no es un número.
    if (dni.charAt(9) === "[0-9]") {
      myError = new Error(
        "Luego del guion viene la letra caracteristica de el DNI"
      );
      throw myError;
    }
    /* 
    - La letra se corresponde con la que debería, según el número.
    creo una variable para que sea un poco mas facil de seguir
    transforma la letra que se saca y la pasa a mayuscula
     */

    const givenLetter = dni.charAt(9).toUpperCase();

    /* 
    usando match function, llamando al array de manera que revise si esta
    la letra dada
     */
    if (givenLetter.match(`^${letras}`)) {
      myError = new Error("La letra dada no forma parte de las letras validas");
      throw myError;
    }
    console.log("El DNI dado es valido!");
  } catch (err) {
    console.error("Se ha producido un error!", err.message);
  } finally {
    console.log("Done run ");
  }
}

dniVerifier("66877466-N");
