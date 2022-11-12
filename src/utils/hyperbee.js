// @ts-ignore
import Hyperbee from 'hyperbee';
import {setupCorestore} from './corestore';

export default class HyperbeeUtils {
  client;
  cleanup;
  corestore;
  name;
  key;

  constructor(async_param) {
    if (typeof async_param === 'undefined') {
      throw new Error('Cannot be called directly');
    }

    this.corestore = async_param.corestore;
    this.client = async_param.client;
    this.cleanup = async_param.cleanup;
    this.name = async_param.name;
  }

  static async init(name) {
    const {corestore, client, cleanup} = await setupCorestore(name);
    console.log('Hyperspace daemon connected, status:');
    console.log(await client.status());

    return new HyperbeeUtils({corestore, client, cleanup, name});
  }

  async createHyperbee() {
    if (this.key) {
      throw new Error('Hyperbee already created for this corestore');
    }

    const bee = new Hyperbee(this.client.corestore().get(this.name), {
      keyEncoding: 'utf8',
      valueEncoding: 'json',
    });
    await bee.promises.ready();
    console.log('New bee created, key:');
    console.log('  ', bee.feed.key.toString('hex'));
    this.key = bee.feed.key.toString('hex');

    return {
      bee,
      key: bee.feed.key.toString('hex'),
    };
  }

  async loadHyperbee() {
    if (!this.key) {
      throw new Error('Hyperbee still not created for this corestore');
    }

    const bee = new Hyperbee(this.client.corestore().get(this.name), {
      keyEncoding: 'utf8',
      valueEncoding: 'json',
    });
    await bee.promises.ready();
    console.log('Bee loaded, key:');
    console.log('  ', bee.feed.key.toString('hex'));

    return {bee, key: bee.feed.key.toString('hex')};
  }

  async swarmHyperbee(hyperbee) {
    await this.client.replicate(hyperbee.feed);
    await new Promise(() => setTimeout(() => {}, 3e3));
    await this.client.network.configure(hyperbee.feed, {
      announce: false,
      lookup: false,
    });

    return {
      key: hyperbee.feed.key.toString('hex'),
      discoveryKey: hyperbee.feed.discoveryKey.toString('hex'),
    };
  }

  async close() {
    await this.cleanup();
  }
}
