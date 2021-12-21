import { dataSourcesType } from '../src/types';
import users from '../database/mockdb';

const resolvers = {
    Query: {
        users: () => {
            return users;
        },
        exampleDatasource: (parent: any, args: any, { dataSources }:{ dataSources: dataSourcesType }) => {
            return dataSources.exampleDatasource.exampleUsers();
        }
    }
};

export default resolvers;
