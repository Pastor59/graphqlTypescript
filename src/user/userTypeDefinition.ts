import { gql } from 'apollo-server-express';

const userTypeDefinition = gql`
  type User {
    username: String
  }

  type Query {
    login(username: String!, password: String!): String!
  }

  type Mutation {
    createUser(username: String!, password: String!): String!
    saveCoordinates(latitude: Float!, longitude: Float!): String!
  }
`;

export default userTypeDefinition;
