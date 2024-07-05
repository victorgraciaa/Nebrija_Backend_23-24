import { GraphQLError } from "graphql"
import { getCharacter } from "../lib/getCharacter.ts";
import { getCharacters } from "../lib/getCharacters.ts";
import { CharacterType } from "../types.ts";

export const Query = {
    character: async (id: string): Promise<CharacterType> => {
        try{
            const char = await getCharacter(id)
            return char
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    charactersByIds: async (ids: string[]): Promise<CharacterType[]> => {
        try{
            const chars = await getCharacters(ids)
            return chars
        } catch (err) {
            throw new GraphQLError(err)
        }
    }
}