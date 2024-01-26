// array = [1,2,3]
// array2 = [1,2,3]
// arrayConcat = array.concat(array2)
// console.table(arrayConcat); 

/*Declarar una funcion

function name(params) {
    }

*/

// function saludar() {
//     console.log('Hola, e ' + i);
// }

//Invocar la funcion

// saludar()

// for (let i = 1; i < 11; i++) {
//     console.log('hola ' + i);
    
// }

// let h = 'hola'

// function tablas(hasta,tabla){
//     for (let i = 1; i <= hasta; i++) {
//         console.log(`${i}*${tabla}=`+(i*tabla));
//     }
// }

// tablas(10,2)

let h = 2
console.log(`El resultado es ${tablas(4,5)}`);
function tablas(a,b){
    let c = a + b
    return c
}



//Funcion anonima
const sumar = function (a,b) {
    let resultado = a+b
    return resultado
}

console.log(sumar(10,20));

//Funciones flechas
// () => {
// }
const multiplicar = (c,d) => c*d
console.log(multiplicar(5,2));

/*-------------------*/

function es_par(callback,callbackError) {
    let num1 = Number(prompt('Ingresa un numero'))
    if(num1 % 2 == 0){
        callback()
    }else{
        callbackError()
    }
}

function caso_exitoso(){
    alert('el numero es par')
}

function caso_faillido(){
    alert('el numero es impar')
}

es_par(caso_exitoso,caso_faillido)