// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


const bici = [
  {
  nome : 'bmw',
  peso : 10,
  colore : 'green'
},
{
nome : 'benz',
peso : 9,
colore : 'blue'
},
{
nome : 'aston',
peso : 8,
colore : 'orange'
}
];

const [bici1,bici2,bici3] = bici;

console.log(bici1,bici2,bici3);


let kg = bici1.peso;
console.log(kg);

if (bici2.peso < kg){
  kg = bici2.peso;
} if (bici3.peso < kg){
  kg = bici3.peso;
}


console.log(`
the lowest kg in bicycle is :
${kg}
  `);
