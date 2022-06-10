/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una variable que almacene tu nombre y otra variable que almacene
 * tu número favorito.
 *
 *  - Muestra ambos valores por consola.
 *
 *  - Cambia tu nº favorito por cualquier otro nº.
 *
 *  - Muestra por consola el resultado del cambio.
 *
 *  - Muestra por consola el tipo de las variables definidas.
 *
 */

let myName = "Aleja";
let number = 14;

console.log(`Mi nombre es ${myName} y mi numero favorito es ${number}`);

number = Math.round(Math.random() * 666);

console.log(`Mi nombre es ${myName} y mi nuevo numero favorito es ${number}`);
console.log("La variable Nombre es un ", typeof myName);
console.log("La variable numero es un ", typeof number);
