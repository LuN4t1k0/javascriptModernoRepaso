const obtenerpokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    const arrayNombres = data.results.map(pokemon => pokemon.name)
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerpokemones();


/**
 * El Metodo Map() crea un nuevo arreglo con lso resultados a la llamada a la funcion 
 * el map va a tomar una funcion de flecha el cual su parametro sera cada uno de neustros objetos
 * y retornamos algo 
 * 
 * 
 */