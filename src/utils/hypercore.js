// @ts-ignore
import Hypercore from 'hypercore';
import {Buffer} from 'buffer';
import {setupCorestore} from './corestore';

export default class HypercoreUtils {
  client;
  cleanup;
  corestore;

  constructor(async_param) {
    if (typeof async_param === 'undefined') {
      throw new Error('Cannot be called directly');
    }

    this.corestore = async_param.corestore;
    this.client = async_param.client;
    this.cleanup = async_param.cleanup;
  }

  static async init(name) {
    const {corestore, client, cleanup} = await setupCorestore(name);
    console.log('Hyperspace daemon connected, status:');
    console.log(await client.status());

    return new HypercoreUtils({corestore, client, cleanup, name});
  }

  async createHypercore() {
    const core = new Hypercore(this.client.corestore(), null);
    await core.promises.ready();
    console.log('New hypercore created, key:');
    console.log('  ', core.key.toString('hex'));

    return {
      core,
      key: core.key.toString('hex'),
    };
  }

  async swarmHypercore(core) {
    await this.client.replicate(core);
    await new Promise(() => setTimeout(() => {}, 3e3));
    await this.client.network.configure(core, {
      announce: true,
      lookup: true,
    });

    return {
      key: core.key.toString('hex'),
      discoveryKey: core.discoveryKey.toString('hex'),
    };
  }

  stopSwarm(core) {
    this.client.network.configure(core, {
      announce: false,
      lookup: false,
    });
  }

  async loadHypercore(key) {
    const drive = new Hypercore(
      this.client.corestore(),
      Buffer.from(key, 'hex'),
    );
    await drive.promises.ready();
    console.log('Hypercore loaded, key:');
    console.log('  ', drive.key.toString('hex'));

    return {drive, key: drive.key.toString('hex')};
  }

  async close() {
    await this.cleanup();
  }
}
