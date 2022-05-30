'use strict';
let clock;
let time = 1;
let cucu = 'cucú ';

for (time; time <= 3; time++) {
  /*   
  repeat is a function that concats the given text
  doesnt really need a var it can just be 
  "cucu ".repeat(time);
  and it would store the repeated concat in the variable scream
 */
  let scream = cucu.repeat(time);

  console.log(`${scream}`);

  console.log(`It's ${time} o'clock!`);
}
