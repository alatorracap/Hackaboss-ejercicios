'use strict';

const myname = 'Alejandra';
const color = 'blue';
let age = 24;

console.log(`Nombre: ${myname}`);
console.log(`Edad: ${age}`);

// descuento infantil, menores a 12
if (age <= 12) {
  console.log(`A ${myname} le corresponde el descuento infantil`);
}
// descuento juvenil, mayores de 12, menores a 30
else if (age <= 30) {
  console.log(`A ${myname} le corresponde el descuento juvenil`);
}
//descuento de jubilados, mayores a 60
else if (age >= 60) {
  console.log(`A ${myname} le corresponde el descuento de jubilados`);
}
//si no cae en ninguno de los anteriores descuentos
else {
  console.log(`A ${myname} no le corresponde ningun descuento`);
}
