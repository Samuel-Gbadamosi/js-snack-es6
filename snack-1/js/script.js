// Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


const n = parseInt(prompt('insert a number ?'));


if (n % 3 == 0){
  console.log(`${n} pari`);
} else {
  console.log(`${n} dispari`);
}
