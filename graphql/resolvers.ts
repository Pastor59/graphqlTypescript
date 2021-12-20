import { dataSources } from '../src/types';
import users from '../database/mockdb';

const resolvers = {
  Query: {
    users: () => users,
    exampleDatasource: (parent: any, args: any, { dataSources }:{ dataSources: dataSources }) => dataSources.exampleDatasource.exampleUsers()
  }
}

export default resolvers;