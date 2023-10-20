import { Caracter } from "../types.ts";

export const getCaracter = async (
    id: number
): Promise<Caracter> => {

    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    if(response.status !== 200){
        throw new Error("Cannot fetch location")
    }

    const data = await response.json()

    const resultado: Caracter = {
        ID: data.id,
        Name: data.name,
        Status: data.status,
        Species: data.species,
        Gender: data.gender,
        Origin: data.origin.name,
        Location: data.location.name,
        Created: data.created
    }

    return resultado

}