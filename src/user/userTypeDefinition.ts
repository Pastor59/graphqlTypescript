import { gql } from 'apollo-server';

const userTypeDefinition = gql`
  type User {
    username: String
    password: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(username: String!, password: String!): String!
  }
`;

export default userTypeDefinition;
