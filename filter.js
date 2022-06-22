/**
 * El metodo filter crea un nuevo array con todos los elementos 
 * que cumplan la condicion implementada por la funcion dada
 * 
 */

const palabras = ['gato', 'perro','zapato', 'lechuga']

const resultado = palabras.filter(palabra => palabra.length <= 4)

console.log(resultado);