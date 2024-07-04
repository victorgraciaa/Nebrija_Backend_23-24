// The GraphQL schema
export const typeDefs = `#graphql
  type Tipo {
  
  }

  type Query {
    getTipo: Tipo!
  }

  type Mutation {
    addTipo(name: String!): Tipo!
  }

`;
