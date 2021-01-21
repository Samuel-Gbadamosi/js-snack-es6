
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// // Usiamo i nuovi metodi degli array foreach o filter
// // Esempio:
// // const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// // Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'
// // Buon lavoro :thumbsupparrot:
const myArrayo = ['pippo','pluto','paperino','paperone','paperina','paperoga'];

 let n1 = parseInt(prompt('kindly insert a number from 0 to 6'));
 let n2 = parseInt(prompt('kindly insert a number from 0 to 6'));

// console.log(n1,n2);
const client = [];

 myArrayo.forEach((element,index) => {
   // console.log(element,index);

   if (index >= n1 && index <= n2 ){
     client.push(element)
   }

 });
console.log(client);
