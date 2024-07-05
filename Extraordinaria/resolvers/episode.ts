import { GraphQLError } from "graphql"
import { getCharacter } from "../lib/getCharacter.ts";

export const episode = {
    characters: async (id: string) => {
        try{
            const char = await getCharacter(id)
            return char
        } catch (err) {
            throw new GraphQLError(err)
        }      
    },
}