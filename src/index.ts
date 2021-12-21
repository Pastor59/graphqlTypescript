import { ApolloServer } from 'apollo-server';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import UserAPI from './datasources/user';
import ExampleDatasource from './datasources/exampleDatasource';

const dataSources = () => {
    return {
        userAPI: new UserAPI(),
        exampleDatasource: new ExampleDatasource()
    };
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers, dataSources: dataSources });

server.listen().then(({ url }:{url: String}) => {
    // eslint-disable-next-line no-undef
    console.log(url);
});
