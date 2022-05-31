'use strick';
let result = '';
let userPoints = 0;
let pcPoints = 0;
let opt = ['piedra', 'papel', 'tijera'];
let playerChoice = '';

//funcion que selecciona por la Pc
function pcPlays() {
  let pcPlay = opt[Math.floor(Math.random() * 3)];
  return pcPlay;
}

while ((userPoints < 3 && pcPoints != 3) || (userPoints != 3 && pcPoints < 3)) {
  //pide al jugador que elige
  playerChoice = prompt('Que seleccionas?');

  //result es es string resultado de la computadora
  result = pcPlays();

  //enseña los resultados
  console.log(`La computadora eligio: ${result}`);
  console.log(`El jugador eligio: ${playerChoice}`);

  //conditionals
  //si el resultado es igual
  if (playerChoice === result) {
    console.log('Empate');
  } else if (
    //si el jugador le gana a la pc
    (playerChoice === 'piedra' && result === 'tijera') ||
    (playerChoice === 'papel' && result === 'piedra') ||
    (playerChoice === 'tijera' && result === 'papel')
  ) {
    console.log('Has ganado!');
    userPoints++;
  } else if (
    //si la pc le gana al jugador
    (playerChoice === 'papel' && result === 'tijera') ||
    (playerChoice === 'tijera' && result === 'piedra') ||
    (playerChoice === 'piedra' && result === 'papel')
  ) {
    console.log('Has perdido!');
    pcPoints++;
  } else {
    //si el input del jugador no es valido
    console.log('esa opcion no existe, elige una que');
  }

  console.log(`Player:${userPoints}|Pc: ${pcPoints}`);
}
