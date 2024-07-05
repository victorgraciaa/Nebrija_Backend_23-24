import { CharacterType } from "../types.ts";

export const getCharacter = async (
 id: string   
): Promise<CharacterType> => {
    
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const data = await fetch(url)

    const response = await data.json()    
    return response
}