export interface ResponseData {
    name: string
    types: tipos[]
    id: number
    game_indices: indices[]
}

type tipos = {
    slot: number
    type: tipo
}

type tipo = {
    name: string
}

type indices = {
    generation: gen
}

type gen = {
    name: string
}



const fetchData = async (e, b) => {
  try {   

    if(e === "1"){
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${b}`
      );    
      const data: ResponseData = await response.json();

      console.log("Nombre: "+data.name)
      data.types.forEach((elem) => console.log(elem.type.name))
      console.log("ID: "+data.id) 
    }
    if(e === "2"){
      const response2 = await fetch(
        `https://pokeapi.co/api/v2/type/${b}`
      );    
      const data2: ResponseData = await response2.json();

      console.log("Tipo: "+b)
      console.log("Generacion: "+data2.game_indices[0].generation.name)
    }

  } catch (error) {
    console.log(error);
  }
};

const eleccion = prompt("Si quieres buscar un pokemon introduce 1, si quieres buscar un tipo introduce 2: ")

if(eleccion === "1"){  
    const busqueda = prompt("Introduce el pokemon que quieres consultar: ");
    await fetchData(eleccion, busqueda);
}
if(eleccion === "2"){
  const busqueda = prompt("Introduce el tipo que quieres consultar: ");
  await fetchData(eleccion, busqueda);
}
