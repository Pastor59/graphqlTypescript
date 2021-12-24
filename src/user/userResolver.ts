import { dataSourcesType } from '../types';

const userResolvers = {
  Query: {
    login: async(
      parent: any,
      { username, password }: { username: string, password: string },
      { dataSources }: { dataSources: dataSourcesType }) => {
      return await dataSources.user.login(username, password);
    }
  },
  Mutation: {
    createUser: async(
      parent: any,
      { username, password }: { username: string, password: string },
      { dataSources }: { dataSources : dataSourcesType }) => {
      return await dataSources.user.createUser(username, password);
    },
    saveCoordinates: async(
      parent: any,
      { latitude, longitude }: { latitude: number, longitude: number },
      { dataSources, user }: { dataSources: dataSourcesType, user: any }) => {
      return await dataSources.user.saveCoordinates(latitude, longitude, user?.sub);
    }
  }
};

export default userResolvers;
