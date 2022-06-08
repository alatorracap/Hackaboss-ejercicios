'use strict';

//Generar una contraseña (número entero aleatorio del 0 al 100)
function genPassw() {
  let password = Math.floor(Math.random() * 100 + 1);
  // console.log(`Password is ${password}`);
  return password;
}

function userInter(win) {
  let end = false;
  let tries = 0;
  let userChoice = '';
  let winner = parseInt(win);
  console.log(`WINNER NUMBER ${win}`);

  while (!end && tries < 5) {
    userChoice = prompt('Introduce un número del 0 al 100');
    userChoice = parseInt(userChoice);

    // if (userChoice > 100) {
    //   userChoice = prompt('tiene que ser un numero del 1 al 100');
    // }

    if (userChoice == winner) {
      console.log('WINNER WINNER!');
      end = true;
    } else if (userChoice < winner) {
      console.log('Incorrecto, el numero ganador es mas grande');
    } else if (userChoice > winner) {
      console.log('Incorrecto, el numero ganador es mas pequeño');
    }
    tries++;
    win = 50;
  }
}

//console.log(genPassw()); //debbug
let answer = genPassw();
// console.log(`answer is ${answer}`);
userInter(answer);
