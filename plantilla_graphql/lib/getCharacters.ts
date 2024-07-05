import { CharacterType } from "../types.ts";

export const getCharacters = async (
 ids: string[]  
): Promise<CharacterType[]> => {
    
    const url = `https://rickandmortyapi.com/api/character/${ids}`
    const data = await fetch(url)

    const response = await data.json()    
    return response
}