import { EpisodeType } from "../types.ts";

export const getEpisode = async (
 id: string   
): Promise<EpisodeType> => {
    
    const url = `https://rickandmortyapi.com/api/episode/${id}`
    const data = await fetch(url)

    const response = await data.json()    
    return response
}