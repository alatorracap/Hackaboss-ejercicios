"use strict";
//llama a los elementos del HTML
const body = document.querySelector("body");
const p = document.querySelector("p");
//inicializa valores a usar
let i = 0;
let r;
let g;
let b;

//crea el intervalo
let inter = setInterval(() => {
  //nos da los valores rgb random
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  console.log(r, g, b);
  //cambia el background
  body.style.backgroundColor = ` rgb(${r}, ${g}, ${b}) `;
  //cambia el texto
  p.textContent = i;
  //aumenta el tiempo transcurrido
  i++;
  if (i === 20) {
    clearInterval(inter);
  }
}, 1000);
