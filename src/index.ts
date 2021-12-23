import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
dotenv.config();
import Database from './database';
import { UserDataSource, UserResolver, userTypeDefinition } from './user';

const dataSources = () => {
  return {
    user: new UserDataSource()
  };
};

const server = new ApolloServer({ typeDefs: userTypeDefinition, resolvers: UserResolver, dataSources: dataSources });
const database = Database.getInstance();
database.connect();
server.listen().then(({ url }:{url: String}) => {
  // eslint-disable-next-line no-undef
  console.log(url);
});
