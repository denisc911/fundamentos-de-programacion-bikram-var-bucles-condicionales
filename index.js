

// Iteraciones 🏰 proyecto individual 🏰

//13
let variableValorNumerico = 3;

//14
const  MiNombre = "Denis";

//15
const MiNumeroFav = 33

//16
let booleano1
let booleano2
var booleanoOr = (booleano1 || booleano2);

//17
var booleanoMix1 = (booleano1 && (Math.PI * 2 === Math.PI)) || (variableValorNumerico >= MiNumeroFav);

//18.- variable 'seisNoEsNueve' cuyo valor sea la comparación booleana '6 no es igual que 9'
var seisNoEsNueve = 6 !== 9;

//19.- variable 'booleanoMix2' cuyo valor sea la comparación booleana 'variableValorNumerico positivo o menor que -(MiNumeroFav * TAU)
var booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU));

//Operadores
//20.- variable 'valorSuma' cuyo valor sea la suma de MiNumeroFav y variableValorNumerico

var valorSuma = MiNumeroFav + variableValorNumerico;
//21.- variable 'valorResta' cuyo valor sea la resta de MiNumeroFav menos variableValorNumerico
var valorResta = MiNumeroFav - variableValorNumerico;
//22.- variable 'valorMultiplicacion' cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
var valorMultiplicacion = MiNumeroFav * variableValorNumerico;
//23.- variable 'valorDivision' cuyo valor sea la division de MiNumeroFav entre 3
var valorDivision = MiNumeroFav / variableValorNumerico;
//Bucles
//24.- crea la variable 'contarHasta10' con valor 0 e incrementa su valor con un bucle while hasta que se verifique contarHasta10 === 10
var contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
}

//25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
var preI = 0;
var preJ = 0;
for (var i = 0; i < 11; i++) {
    preI += ++preJ;
}
//26.- crea la variable 'sumaImpares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), si la iteración es impar se deberá asumar a sumaPares el número de la iteración actual (i)
var sumaImpares = 0;
for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}
