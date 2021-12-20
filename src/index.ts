import { ApolloServer } from 'apollo-server';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import UserAPI from './datasources/user';
import ExampleDatasource from './datasources/exampleDatasource';

const dataSources = () => ({
  userAPI: new UserAPI(),
  exampleDatasource: new ExampleDatasource()
});

const context = async ({ req }:{req: any}) => {
  return null;
}

const server = new ApolloServer({typeDefs, resolvers, dataSources, context});

server.listen().then(({url}:{url: String}) => {
  console.log(url);
});
