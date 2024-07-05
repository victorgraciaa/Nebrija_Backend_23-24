import {LocationType } from "../types.ts";

export const getLocation = async (
 id: string   
): Promise<LocationType> => {
    
    const url = `https://rickandmortyapi.com/api/location/${id}`
    const data = await fetch(url)

    const response = await data.json()    
    return response
}