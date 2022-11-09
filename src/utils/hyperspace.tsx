import {
  Client as HyperspaceClient,
  Server as HyperspaceServer, // @ts-ignore
} from 'hyperspace';

export async function setupHyperspace() {
  let client: any, server: any;

  try {
    client = new HyperspaceClient();
    await client.ready();
  } catch (e) {
    // no daemon, start it in-process
    server = new HyperspaceServer();
    await server.ready();
    client = new HyperspaceClient();
    await client.ready();
  }

  return {
    client,
    async cleanup() {
      await client.close();
      if (server) {
        console.log('Shutting down Hyperspace, this may take a few seconds...');
        await server.stop();
      }
    },
  };
}
