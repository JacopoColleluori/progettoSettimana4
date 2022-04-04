var numero1=8;
var numero2=10;
var verita= true;
var somma= 13;
sottrazione = somma;
const costante1=10;

//differenza tra variabile costante e let
alert("Questa è la variabile numero 1: " + numero1);
console.log("Questa è la costante1: " + costante1);

{
    let numero1= 10;
    alert("Questa è la variabile numero1 let: " + numero1);
}

alert ("Questa è la variabile numero1 dopo let:"+ numero1);
// costante1=9;                                                //la costante di variabile non si può cambiare
console.log ("La costante non si può cambiare:"+ costante1 );

//cambio di dato
console.log("numero2 uguale ad" + numero2);
numero2= "si può cambiare tipo di dato";
console.log(numero2); 

//concatenazione stringe  boolean
string3= numero2 + " "+ verita;
console.log(string3);

//somma e sottrazione
somma += numero1;
console.log("la somma è uguale ad "+ somma);
sottrazione -=numero1;
console.log("la sottrazione è uguale ad "+ sottrazione);