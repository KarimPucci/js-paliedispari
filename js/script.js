let parola ='anna';
let carattere;
let parolaInversa = '';

let i = parola.length - 1;

while (i >= 0) {
  carattere = parola[i];
  parolaInversa += carattere;
  console.log(carattere);
  i--;
}

console.log(parolaInversa);

if(parola === parolaInversa){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}


//PARI E DISPARI
// let parioDispari = prompt("Scrivi pari o dispari");
// let numeroGiocatore = parseInt(prompt("scrivi un numero da 1 a 5"));
// let numeroComputer = getRandomIntInclusive(1,5);
// let numero = console.log(numeroComputer);
// let sommaNumeri = numeroGiocatore + numeroComputer;

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// if (sommaNumeri % 2 == 0) {
//   console.log(sommaNumeri + " è pari");
// }
// else {
//   console.log(sommaNumeri + " è dispari");
//}

