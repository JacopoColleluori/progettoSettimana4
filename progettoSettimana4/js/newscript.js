let arrayShow = [];
let output = document.getElementById("results");
let i= 0;
let number=0;
let number1= 0;
let number2= 0;
let sommaCtrl=false;
let molCtrl=false;
let divCtrl=false;
let sottrCtrl=false;






function show(numero){
    arrayShow.push(numero);
    number1+= arrayShow[i].toString(); 
    
   
    i++;
    output.innerHTML=parseFloat(number1);
}




function cancel(){
    number1 = "0";
    arrayShow = [];
    i=0;
    output.innerHTML=parseFloat(number1);
}

function somma(){
    output.innerHTML=0;
    sommaCtrl= true;
    number2=parseFloat(number1);
    number1=0; 
}
function sottr(){
    output.innerHTML=0;
    sottrCtrl=true;
    number2=parseFloat(number1);
    number1=0;
   
}
function mol(){
    output.innerHTML=0;
    molCtrl=true;
    number2=parseFloat(number1);
    number1=0;
   
}
function div(){
    output.innerHTML=0;
    divCtrl= true;
    number2=parseFloat(number1);
    number1=0;
   
}
function risultato(){
    if (sommaCtrl){
        number= number2 + parseFloat(number1);
        sommaCtrl=false;
    }else if(sottrCtrl){
        number= number2 - parseFloat(number1);
        sottrCtrl=false;
    }else if(divCtrl){
        number= number2 / parseFloat(number1);
        divCtrl=false;
    }else if(molCtrl){
        number= number2 * parseFloat(number1);
        molCtrl=false;
    }
    output.innerHTML=number;
}