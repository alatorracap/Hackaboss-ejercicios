"use strict";

/* 
tareas:
1-cambiar lel color de las secciones existentes
2-accion para que el boton agregue un div nuevo
*/
//llamamos a los elementos en variables
//section que contiene los divs
const sect = document.querySelector("body > section");
//selecciona los divs
const div = document.getElementsByTagName("div");
//llama el boton que crea el cuadrado
const newSquare = document.getElementById("newSquare");
//llama el boton que detiene la disco (detiene el interval)
const stopB = document.getElementById("stopB");

function randomColor() {
  let value = 0;
  value = Math.floor(Math.random() * 255);
  return value;
}
function stopAll(interv) {
  clearInterval(interv);
}

//funcion encargada de cambiar los colores

console.log("start"); //debug

//inicializa valores a usar
//aunque es pa debbug
let i = 0;
//console.log(div);

//crea el intervalo
let inter = setInterval(() => {
  //console.log("inter"); //debbug

  //for loop-of que le dara color random a cada cuadrado div
  for (const d of div) {
    //selecciona el div correspondiente en el loop
    d.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  }

  //aumenta el tiempo transcurrido
  //se eliminara al crear los botones
  i++;
  //esto igual
  if (i === 5) {
    clearInterval(inter);
  }
}, 1000);

//crea interaction para detener el shuffle
/* 
IMPORTANTE!!
en el html tuve que mover el script tag al final poque sino daba un error con el event listener
 */
stopB.addEventListener("click", () => {
  console.log("Debbug boop boop");
  stopAll(inter);
});

//creo el arrow function del evento create porque se me es mas facil
const createS = () => {
  const newDiv = document.createElement("div");
  console.log("newps tee doo im a new square");
  sect.appendChild(newDiv);
};

//crea evento que hace que el boton agrege un nuevo div
newSquare.addEventListener("click", createS);
