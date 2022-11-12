import {setupHyperspace} from './hyperspace';

export async function setupCorestore(name) {
  const {client, cleanup} = await setupHyperspace();
  const corestore = await client.corestore(name);

  return {
    corestore,
    client,
    async cleanup() {
      await cleanup();
    },
  };
}
