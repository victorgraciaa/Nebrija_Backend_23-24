// The GraphQL schema
export const typeDefs = `#graphql
  type character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: String
    location: String
    image: String
    episode: [String]!
    url: String
    created: String
  }

  type location {
    id: ID
    name: String
    type: String
    dimension: String
    residents: [String]!
    url: String
    created: String
  }

  type episode {
    id: ID
    name: String
    air_date: String
    episode: String
    characters: [String]!
    url: String
    created: String
  }

  type Query {
    character(id: ID!): character
    charactersByIds(ids: [ID!]!): [character]
  }
`;
