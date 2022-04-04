let stringPart = new String("Stringa uno");
console.log(stringPart);

let stringMax = stringPart.toUpperCase();
console.log(stringMax);
let stringMin = stringPart.toLowerCase();
console.log(stringMin);

let stringSplit = stringPart.split("");
console.log(stringSplit);

let ele1 = stringSplit.slice(1, 3);
console.log(ele1);

let ele2 = stringSplit.slice(2, 3);
console.log(ele2);

let insieme = ele1.concat(ele2);
console.log(insieme);

var persone = [
    "Mario Rossi",
    "Favrizio Frizzi RIP",
    "Giulio Cesare"
]

console.log(persone[2]);
var valore = "Funziona?";

//pop e push
persone.push(valore);
console.log(persone);

console.log(persone.length);

persone.pop(valore);
console.log(persone);

//shift e unshift
persone.unshift(valore);
console.log(persone);

console.log(persone.length);

persone.shift(valore);
console.log(persone);


var numeri = [
    1,
    2,
    3,
    4,
    5
]

function funzione(array) {
   for (i=0 ; i<array.length ; i++) {
       console.log(array[i]);
   }

}
funzione(numeri);