let primera_01 = "charmander";
let primera_02 = "charmeleon";
let primera_03 = "charizard";
let primera_04 = "Squirtle";
let primera_05 = "wartortle";
let primera_06 = "Blastoise";
let primera_07 = "bulbasaur";
let primera_08 = "Ivysaur";
let primera_09 = "Venasaur";

let PrimeraGen = ["bulbasaur","Ivysaur","Venasaur","charmander","charmeleon","charizard","Squirtle","wartortle","Blastoise"];
let A = ['hola', 25, true, 2.1416, '2024-02-01'];

console.log(A);

console.log(PrimeraGen);
//array methods: son metodos que vienen por defecto añadidos en js no tienen que programarlos solo tienes que usarlos
console.log(PrimeraGen.length);

for(let i = 0; i < PrimeraGen.length; i++){
    console.log('bucle for '+PrimeraGen[i]);
}

//ARRAY METHODS

//insertar un elemento nuevo dentro de un array
PrimeraGen.push('Caterpie');
console.log(PrimeraGen);
console.log(PrimeraGen[9]);
//Eliminar un elemento dentro de un  array
PrimeraGen.pop();
console.log(PrimeraGen);
console.log(PrimeraGen[9]);
//Eliminar el primer elemento de un array
PrimeraGen.shift();
console.log(PrimeraGen);
//Agregar un elemento al principio del arreglo
PrimeraGen.unshift('bulbasaur');
console.log(PrimeraGen);
//Crear una copia de un arreglo en otro arreglo
let PrimerGen2 = PrimeraGen.slice(1,9);
console.log(PrimerGen2);
//Concatenar dos arreglos
let segundaGen = ['chikorita','bealeaf','Meganium','cyndaquil','Quilava','Typhlosion','totodile','Croconaw','Feraligatr'];
let primeraMasSegunda = PrimeraGen.concat(segundaGen);
console.log(primeraMasSegunda);
//conocer el indice de un arreglo
console.log(primeraMasSegunda.indexOf('Typhlosion'));
//retorna v o f si el elemento existe dentro del arreglo o no
console.log(primeraMasSegunda.includes('Meganium'));
console.log(primeraMasSegunda.includes('Mewtwo'));
//mapea: ejecuta una instruccion-funcion-operacion a cada elemento del arreglo
let PmasSconValor = primeraMasSegunda.map(function(elemento){

        return elemento+' pokemon';

});

console.log(PmasSconValor);

let B = [2, 4,8,7];
let C = B.map(function(num){
    return num*2;
});
console.log(C);
//Filter: crea un nuevo arreglo con los valores que pasen la condicion del filtro
let D = B.filter(function(elemento){
    return elemento > 4;
});
console.log(D);

//Array metod que me permite recorrer un arreglo
primeraMasSegunda.forEach(function(elemento, indice){
    console.log(elemento);
    console.log(indice);
});

//Spread operator
let numeros1 = [4,8,6];
let numeros2 = [5,7,9,13];

let numeros3 = [...numeros1, ...numeros2];
numeros3 = [222, ...numeros3];
console.log(numeros3);

//Destructuring
let [v1,v2,v3] = numeros1;

let sum = v1 + v2;
console.log(sum);
console.log(v1+ " " + v2 + " " + v3);

console.log('valor antes de cambiar '+numeros1[0])
numeros1[0] = 9;
console.log('valor despues de cambiar '+ numeros1[0])