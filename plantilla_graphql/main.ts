import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Tipo } from "./resolvers/tipo.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "mongoose";

// const MONGO_URL = Deno.env.get("MONGO_URL");
const MONGO_URL = "mongodb+srv://victorgraciaa:nebrija2324@cluster-nebrija-23-24.76u69py.mongodb.net/extraordinaria?retryWrites=true&w=majority"  

if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

// Connect to MongoDB
await mongoose.connect(MONGO_URL);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Tipo,
  },
});

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);
