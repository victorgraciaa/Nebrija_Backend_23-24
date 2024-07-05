import { GraphQLError } from "graphql"
import { getEpisode } from "../lib/getEpisode.ts";
import { getLocation } from "../lib/getLocation.ts";
import { getCharacter } from "../lib/getCharacter.ts";
import { CharacterType } from "../types.ts";

export const character = {
    id: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.id
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    name: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.name
        } catch (err) {
            throw new GraphQLError(err)
        }
    },    

    status: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.status
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    species: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.species
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    type: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.type
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    gender: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.gender
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    origin: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.name
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    image: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.image
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    url: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.url
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    created: async (parent: string): Promise<string> => {
        try{
            const char = await getCharacter(parent)
            return char.created
        } catch (err) {
            throw new GraphQLError(err)
        }
    },

    episode: async (id: string) => {
        try{
            const ep = await getEpisode(id)
            return ep
        } catch (err) {
            throw new GraphQLError(err)
        }      
    },

    location: async (id: string) => {
        try{
            const ep = await getLocation(id)
            return ep
        } catch (err) {
            throw new GraphQLError(err)
        }      
    }
        
}