const libro = {
  titulo : "Aprendiendo JavaScript",
  autor : "Carlos Azaustre",
  numPaginas : 100,
  editorial : "España.es",
  precio	:"24.99"
}

for(prop in libro){
  console.log(`la prop ${prop} tiene el valor ${libro[prop]}`)
}

/* con esa forma podemos recorrer las propiedades de un objeto leyendo la clave y su valor
 */
