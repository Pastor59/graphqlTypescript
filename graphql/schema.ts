import { gql } from 'apollo-server';

const typeDefs = gql`
  type User { 
    name: String
    email: String
    projects: [Project]
  }

  type Project {
    title: String
    active: Boolean
    members: [User]
  }

  type Query {
    users: [User]
    exampleDatasource: [User]
  }
`;

export default typeDefs;
