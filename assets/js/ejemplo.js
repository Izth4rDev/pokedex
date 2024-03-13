let numero1 = 2;
let numero2 = 4;


/*function sumarNumeros(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
}
function promedio (resulFuncion){

    let promedio = resulFuncion/2;
    console.log(promedio);
}

let resulFuncion = sumarNumeros(numero1 , numero2);
promedio(resulFuncion);*/

function sumarNumeros(numero1, numero2){
    let resultado = numero1 + numero2;
    promedio(resultado);
}

function promedio (resulFuncion){

    let promedio = resulFuncion/2;
    console.log(promedio);
}

sumarNumeros(numero1, numero2);

/*Estructuras de control*/
/* mayor que >  menor que < 
== igual === identico
 >= mayor igual  <= menor igual
 != distinto !== distinto identico*/ 

 /* || or    && and */


 /* or
 V o V = V
 V o F = V
 F o V = V
 F O F = F*/

 /*
 V and V = V
 V and F = F
 F and V = F
 F and F = F
 */


/*
if( "3" === 3 && 1 === 1 && 4 == 4){ 
    console.log("son iguales");
}


if( 3 == 4){
    console.log("son iguales");
}else{
    console.log("no son iguales");
}
}*/


let Eval = "-"; //aqui vamos a escoger que operacion matematica vamos a realizar
let number1 = 1;
let number2 = 4;
let resultado;


if( "X" == Eval){

    console.log("estamos multiplicando");
    resultado = number1 * number2;
    console.log(resultado);

}else if("+" == Eval){

    console.log("estamos sumando");
    resultado = number1 + number2;
    console.log(resultado);

}else if("-" == Eval){

    console.log("estamos restando");
    resultado = number1 - number2;
    console.log(resultado);

}else if("/" == Eval){

    console.log("estamos dividiendo");
    resultado = number1 / number2;
    console.log(resultado);

}else{

    console.log("ingresaste un caracter incorrecto");

}


console.log("ejecucion terminada");


/*Bucles o iteraciones*/

/* for
while
do - while */



for(let i = 0; i < 4; i++){

    console.log("ejecuion for nro:" + i);
    console.log("hola hola");
    console.log("hola hola");
}

let j = 40;

/*
while(j > 0){
    console.log("ejecucion while nro:" + j);
    j = j - 1;
}
*/

let k = 0

do{

    console.log("ejecucion do-while 3 nro:" + k);
    k++;

}while(k < 10);

console.log("ejecucion terminada");