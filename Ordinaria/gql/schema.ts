// The GraphQL schema
export const typeDefs = `#graphql
  
  type Contacto {
    nombreApellidos: String!
    nmro: String!
    pais: String!
    horaPais: String!
  }
  
  type Query {
    getContacto (id: String!): Contacto
    getContactos: [Contacto]
  }

  type Mutation {
    addContacto (nombreApellidos: String!, nmro: String!): Contacto 
    deleteContacto (id: String!): Boolean
    updateContacto (id: String!): Contacto 
  }
`;
