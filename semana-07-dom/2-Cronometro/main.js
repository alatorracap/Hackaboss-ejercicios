"use strict";
/* 
Crea un cronómetro que permita ponerlo en marcha, pararlo y resetearlo
A mayores haz que el tiempo acumulado se mantenga la siguiente vez que carguemos la página.
Nota: el evento de window "beforeunload" permite ejecutar código al cerrar la página. */

const startB = document.querySelector("#start");
const stopB = document.querySelector("#stop");
const resetB = document.querySelector("#reset");
const p = document.querySelector("#timer ");
let sec;
let min;
let hor;
let interval = 0;
let timer;

function clockTime() {
  sec = Math.floor(interval % 60);
  min = Math.floor(interval / 60);
  hor = 0;

  p.textContent = `${hor}:${min}:${sec} `;
}

// timer = setInterval(() => {
//   console.log("inter");
//   // interval++;
// }, 1000);

//event arrow functions
const startTime = () => {
  timer = setInterval(() => {
    interval++;
    clockTime();
  }, 1000);
};

const erased = () => {
  //aqui se resetea
  sec = interval;
};
function stopAll() {
  clearInterval(timer);
}

//Event listeners

//detiene el cronometro
stopB.addEventListener("click", () => {
  console.log("Debbug boop boop");
  stopAll(timer);
});

//resetea el cronometro
resetB.addEventListener("click", () => {
  console.log("REset boop boop");
  // timer = 0;
  interval = 0;
  clockTime();
  // p.textContent = `${hor}:${min}:${sec} `;
});

//empieza el cronometrp
startB.addEventListener("click", startTime);
