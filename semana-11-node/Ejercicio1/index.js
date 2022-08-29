"use strict";

const fs = require("fs");
const path = require("path");
const parseArgs = require("minimist");
const { format } = require("date-fns");

const arg = parseArgs(process.argv.slice(2));

//archivo donde se encuentan los datos
const eventData = path.join(".", "data.json");
// console.log("eventData", eventData); //? Debbug
// console.log(fs.existsSync(eventData)); //? Debbug

//& revisa el archivo json, guarda los nuevos datos e imprime lo viejo
function fileReader() {
  //chequea que el data file exista
  const present = fs.existsSync(eventData);
  if (!present) {
    console.log("ups! no tenemos datos guardados");
    return [];
  } else {
    return JSON.parse(fs.readFileSync(eventData));
  }
}

//& toma los argumentos dados, los mete en un objeto y envia el objeto al documento
function fileWriter() {
  const newEvent = {
    date: new Date(arg.f),
    description: arg.d,
  };

  const content = fileReader();

  content.push(newEvent);
  fs.writeFileSync(eventData, JSON.stringify(content));
}

//& obtiene un array de objetos, lo lee e imprime cada entrada
function dataPrinter(obj) {
  for (const event of obj) {
    const eventDate = format(new Date(event.date), "yyyy-MM-dd");
    console.log(`Fecha:${eventDate}, Descripción: ${event.description}`);
  }
}

function main() {
  //*revisa si pide lista primero
  if (arg.l) {
    dataPrinter(fileReader());
  } else {
    //*revisa si pasaron los argumentos de fecha y descripcion
    if (arg.f && arg.d) {
      //*llama a la funcion que escribe dentro del json
      fileWriter();
      //*llama al printer que utiliza el objeto que pasa
      //*filereader y hace lo suyo
      dataPrinter(fileReader());
    } else {
      console.log(
        "Se necesita -f con la fecha (yyyy-MM-dd) y -d para la descripcion del evento"
      );
    }
  }
}
main();
