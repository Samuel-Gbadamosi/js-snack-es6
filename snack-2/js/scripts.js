 // Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const arrayNumber = [1,2,3,4,5,6,7,8,9,10];



for (let i = 0; i < arrayNumber.length; i++) {
console.log(i);

if (arrayNumber[i] % 2 == 0){
document.getElementById('one').innerHTML +=
 arrayNumber[i];
} else {
  document.getElementById('two').innerHTML += arrayNumber[i];

}
}
