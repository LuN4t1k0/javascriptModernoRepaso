// async & await

const obtenerpokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};
obtenerpokemones();

/*
me quiero conectar a una api, para eso utilizo el metodo fetch, como es 
algo que espera una respuesta sera una funcion async esto espera await una res
en este caso la respuesta es de tipo json por lo cual debo parcearla pero como
esa respuesta puede no llegar debo encapsular este codigo en un bloque try catch 
*/

const obtenerNombrePokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerNombrePokemon();
