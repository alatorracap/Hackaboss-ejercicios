"use strict";

const urlRick = "https://rickandmortyapi.com/api/character";

// https://rickandmortyapi.com/
//https://github.com/public-apis/public-apis

async function getCharacter(url) {
  try {
    let response = await fetch(url);
    // tambien response.json devuelve una promesa
    let data = await response.json(response);
    // console.log(response);
    // 1 - quiero el numero total de personajes
    console.log("Numero total de personajes:", data.info.count);
    // 2 - quiero el nombre del primer personaje que devuelve la petición
    console.log("Nombre del primer personaje", data.results[0].name);
    // 3 - quiero todos los capitulos donde aparece Rick Sanchez
    console.log(
      "Capitulos donde aparece Rick Sanchez:",
      data.results[0].episode
    );
    //4 - quiero el áltimo capitulo donde aparece Rick Sanchez
    console.log(
      "Último capitulos donde aparece Rick Sanchez:",
      data.results[0].episode[data.results[0].episode.length - 1]
    );
    //5 - quiero el nombre del primer personaje de la página 2
    console.log("NEXT PAGE", data.info.next);
    const response2 = await fetch(data.info.next);
    const data2 = await response2.json();
    console.log("Primer personaje de la página 2:", data2.results[0].name);
    //6 - quiero que se impriman a consola todos los nombres y id de los personajes
    // del dibujo animado

    //console.log(data);
  } catch (error) {
    console.error("Tenemos un error", error.message);
  }
}

getCharacter(urlRick);
