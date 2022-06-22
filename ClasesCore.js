/*
Clases Core Javascript
forman el nucleo de javascrip

number 
aerray 
string


*/

/* object : 
coleccion de variables y funciones agrupadas de manera estructural, las variables que definimos dentro de un objeto se las llama propiedades que son clave : valor  y a las funciones metodos para acceder a sus propiedades se puede hacer con la notacion tipo punto o con la notacion de array, sus propiedades se pueden modificar aunque sea una constante 

para crear objetos se puede hacer con el uso de llaves o creando una nueva instancia de la clase Object

*/

const libro = {
  titulo : "Aprendiendo JavaScript",
  autor : "Carlos Azaustre",
  numPaginas : 100,
  editorial : "España.es",
  precio	:"24.99",
  leer : leer = () => {
    console.log(`he leido el libro ${libro.titulo} `)
  }
}

libro.titulo
libro["numPaginas"]

//modificando valores
libro.titulo = "Desarrollo web con React"
libro.titulo
libro.leer()

//Crear objeto

let libro = new Object({titulo:"algebra de bandor"})

  