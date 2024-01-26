// comentarios

/* comentario multilinea
:)
*/

// Interaccion
// alert('Hola, como estas?') //sentencias
// console.log('Imprimir una salida en la consola')
// prompt('Ingrese su nombre')//Pedir dato lal usuario

// Tipos de Datos: string, numbers, boolean, undefined, null.

// Variables
// let first_name = 'Juan' //string

// first_name = 2 //number

// let last_name

// console.log(last_name);
// last_name = 'Rucci'
// console.log(last_name);
// console.log(first_name);

// first_name = prompt('Ingrese su nombre de nuevo') //string
// console.log('Hola, buen dia ' + first_name)
// console.log(`Hola, buen dia ${first_name}`)

// const fecha_nacimiento = 1997
// console.log(fecha_nacimiento)

//operadores

// let a = 10
// let b = "20"

// let resultado = a + b
// console.log(`El resultado de ${a} + ${b} es = ${resultado}`)

// let fecha_nacimiento = prompt('Ingrese su fecha de nacimiento:')
// alert(`Su edad es ${2024-fecha_nacimiento}`)

// let dolar = prompt('Ingrese una cantidad en dolares:')
// alert(`USD ${dolar} equivale a ARS$${1235*dolar}`)

// // Metodos para cambios de tipo de datos -> texto.to, parseInt

// // Accediendo a caracteres

// alert(fecha_nacimiento[3])
// console.log(fecha_nacimiento.length)

// console.log(fecha_nacimiento.indexOf(1997))

let password = prompt('Cree una contrasenia')
let password2 = prompt('Ingrese su contrasenia')
if (password === password2) {
    alert('La constrasenia es correcta ✅')
} else {
    alert('La constrasenia es incorrecta ❗')
}