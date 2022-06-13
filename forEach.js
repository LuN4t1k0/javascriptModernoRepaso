const miArray = [1,2,3,4,5];

miArray.forEach((item, index)=>{
  console.log(`el valor de la posicion ${index} es ${item}`)
})

const libro = {
  titulo : "Aprendiendo JavaScript",
  autor : "Carlos Azaustre",
  numPaginas : 100,
  editorial : "España.es",
  precio	:"24.99"
}


/* leemos las propiedades de un objeto utilizando los metodos del objeto 
getOwnPropertyNames para los items del objeto y getOwnPropertiDescriptor para los valores */
const prop = Object.getOwnPropertyNames(libro);
prop.forEach(name => {
  let valor = Object.getOwnPropertyDescriptor(libro, name).value;
  console.log(`la propiedad ${name} tiene el valor ${valor}`)
})
