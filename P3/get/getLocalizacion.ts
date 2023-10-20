import { Location } from "../types.ts";

export const getLocalizacion = async (
    id: number
): Promise<Location> => {

    const url = `https://rickandmortyapi.com/api/location/${id}`

    const response = await fetch(url)
    if(response.status !== 200){
        throw new Error("Cannot fetch location")
    }

    const data = await response.json()

    const resultado: Location = {
        ID: data.id,
        Name: data.name,
        Type: data.type,
        Dimension: data.dimension,
        Created: data.created
    }

    return resultado

}