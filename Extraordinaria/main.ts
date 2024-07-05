import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { character } from "./resolvers/character.ts";
import { episode } from "./resolvers/episode.ts";
import { location } from "./resolvers/location.ts";
import { typeDefs } from "./gql/schema.ts";


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    character,
    episode,
    location
  },
});


const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);

