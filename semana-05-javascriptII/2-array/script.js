'use strict';

const names = [
  'A-Jay',
  'Manuel',
  'Manuel',
  'Eddie',
  'A-Jay',
  'Su',
  'Reean',
  'Manuel',
  'A-Jay',
  'Zacharie',
  'Zacharie',
  'Tyra',
  'Rishi',
  'Arun',
  'Kenton',
];

function noRepeat(arr) {
  /* 
    the set() function will create the new array 
    w/o duplicates and w/o sorting
    the ... is spread syntax
  */
  let clean = [...new Set(arr)];

  for (let i = 0; i < clean.length; i++) {
    console.log(`valor es: ${clean[i]}`);
  }

  console.log('\n\n');

  /* 
  for in del array para ver el array
  */
  for (const item in clean) {
    console.log(`valor es: ${clean[item]}`);
  }
  return clean;
}

noRepeat(names);

/* 
            noot noot
                    \|
                        __
                     -=(o '.
                        '.-.\
                        /|  \\
                        '|  ||
                         _\_):,_

*/
