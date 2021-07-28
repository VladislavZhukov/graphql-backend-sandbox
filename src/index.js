import { apolloServer } from './init/server.js';

import { PORT } from './init/config.js';

async function startApolloServer() {

  let as = await apolloServer();
  as.app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${as.server.graphqlPath}`));
  
}
startApolloServer()
