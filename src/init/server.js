import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from '../schema.graphql';
import { resolvers } from '../resolvers.js';

async function apolloServer() {
    const server = new ApolloServer({ typeDefs: schema, resolvers });
    const app = express();
    await server.start();
    server.applyMiddleware({ app });

    return { server, app }
}


export { apolloServer }

