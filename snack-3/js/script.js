// 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const name1 = prompt('insert name ?');
const name2 = prompt('insert name ?');

if (name1 > name2){
  console.log(`${name1}`);
} else if (name2 > name1){
  console.log(`${name2}`);
} else {
  console.log(`${name1} , ${name2} `);
}
