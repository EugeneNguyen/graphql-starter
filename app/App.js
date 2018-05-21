import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema';

const GRAPHQL_PORT = process.env.PORT;

const graphQLServer = express();
const ws = createServer(graphQLServer);

graphQLServer.use('/graphql', cors(), bodyParser.json(), graphqlExpress(req => {
  return ({
    schema: schema,
    context: req
  });
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

ws.listen(GRAPHQL_PORT, () => {
  console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`)
});