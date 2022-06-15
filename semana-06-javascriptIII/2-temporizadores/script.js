"use strict";

/* 
FORMATO
#D, #H, #M o #S
*/

function countSeconds(time, letter) {
  let result = 0;

  if (letter === "M") {
    result = time * 60;
  } else if (letter === "H") {
    result = time * 3600;
  } else if (letter === "D") {
    result = 0;
  }

  return result;
}

function myTimer(tiempo, letra) {
  let seg = 0;
  let min = 0;
  let hor = 0;
  let dia = 0;
  // 10 para test pero se cambiara en base a timer
  let totalTime = 100;

  let inter = setInterval(() => {
    if (seg % 5 === 0) {
      console.log("Han pasado", seg, "segundos");
      console.log(`${dia}D/${hor}H/${min}M/${seg}S`);
    } /* else {
      //   console.log(`${dia}D/${hor}H/${min}M/${seg}S`);
    } */

    if (hor === 24 && min === 60 && seg === 59) {
      hor = 0;
      dia = 1;
    }
    if (min === 60 && seg === 59) {
      min = 0;
      hor = 1;
    }
    if (seg === 59) {
      seg = 0;
      min = 1;
    }
    // aumenta el tiempo transcurrido
    seg++;

    if (seg === totalTime) {
      clearInterval(inter);
    }
  }, 1000);
}
myTimer(70, "d");
