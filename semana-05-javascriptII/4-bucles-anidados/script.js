'use strict';

const catalogo = [
  'margarita',
  'cuatro quesos',
  'prosciutto',
  'carbonara',
  'barbacoa',
  'tropical',
];

// function pizzaplace(toppings) {
//   const secondTopping = [...toppings];
//   let convination = [];

//   for (let top of toppings) {
//     convination = `${toppings[top]} y ${toppings[top + 1]}`;
//   }

//   console.log(convination);
// }

function mypizza(tops) {
  const combinatinos = [];
  //primer bucle selecciona el primer half
  for (let i = 0; i < tops.length; i++) {
    //este bucle selecciona la 2da mitad
    //este 2do bucle hace que no haya repeticiones de los topings
    for (let j = i + 1; j < tops.length; j++) {
      //console.log(`pizza ${tops[i]} y ${tops[j]}`);
      combinatinos.push(`pizza ${tops[i]} y ${tops[j]}`);
    }
  }
  return combinatinos;
}

console.log(mypizza(catalogo));
