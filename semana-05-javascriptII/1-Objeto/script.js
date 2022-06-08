'use strict';

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};
function readObj(theobject) {
  /*   
  for loop for objects, will circle through and extract
  the object entries and values with the
  Object.entries()
 */
  for (const [key, val] of Object.entries(theobject)) {
    if (val < 18) {
      console.log(`${key} es menor de edad`);
    } else {
      console.log(`${key} es mayor de edad`);
    }
  }
  console.log('\n\n');

  /*
  otra forma de hacerlo, en vez de con el for of 
  con un for in
  key es el nombre dado
  */
  for (const key in people) {
    if (people[key] < 18) {
      console.log(`${key} es menor de edad`);
    } else {
      console.log(`${key} es mayor de edad`);
    }
  }
}

readObj(people);
