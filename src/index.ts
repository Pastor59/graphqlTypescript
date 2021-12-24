import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import expressJWT from 'express-jwt';
import Database from './database';
import { UserDataSource, UserResolver, userTypeDefinition } from './user';

const dataSources = () => {
  return {
    user: new UserDataSource()
  };
};

const database = Database.getInstance();
database.connect();

// eslint-disable-next-line no-undef
const env = process.env!;
const port = env.PORT;
const app = express();

app.use(
  expressJWT({
    secret: env.SECRET!,
    algorithms: [ env.ALGORITHM! ],
    credentialsRequired: false
  })
);

const startServer = async() => {
  const server = new ApolloServer({
    typeDefs: userTypeDefinition,
    resolvers: UserResolver,
    dataSources: dataSources,
    context: ({ req }) => {
      const user = req.user || null;
      return { user: user };
    }
  });
  await server.start();
  server.applyMiddleware({ app: app });
  app.listen({ port: port }, () => {
    // eslint-disable-next-line no-undef
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
};

startServer();
