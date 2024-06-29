// The GraphQL schema
export const typeDefs = `#graphql
  type Tipo {
   atributo: String!
  }

  type Query {
    getTipo: Tipo!
  }

  type Mutation {
    addTipo(name: String!): Tipo!
  }

`;
