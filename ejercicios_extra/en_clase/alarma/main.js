"use strict";

/* ALARMA: simulamos una alarma que suene cuando pasan "x" segundos 
           La alarma tiene que imprimir tambien los segundos que pasan
*/

function alarma(timer, beep) {
  for (let i = 1; i < timer; i++) {
    let inter = setInterval(() => {});
    setTimeout(function () {
      if (i % beep === 0) {
        console.log("ALARMA a los", i, "segundos");
      } else {
        console.log(i);
      }
    }, 1000 * i);
  }
}

alarma(21, 5);
