import { dataSourcesType } from '../types';

const userResolvers = {
  Mutation: {
    createUser: async(
      parent: any,
      { username, password }: {username: string, password: string},
      { dataSources }: { dataSources : dataSourcesType }) => {
      return await dataSources.user.createUser(username, password);
    }
  }
};

export default userResolvers;
