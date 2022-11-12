// @ts-ignore
import Hyperdrive from 'hyperdrive';
import {Buffer} from 'buffer';
import {setupCorestore} from './corestore';

export default class HyperdriveUtils {
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

    return new HyperdriveUtils({corestore, client, cleanup});
  }

  async createHyperdrive() {
    const drive = new Hyperdrive(this.client.corestore(), null);
    await drive.promises.ready();
    console.log('New drive created, key:');
    console.log('  ', drive.key.toString('hex'));

    return {
      drive,
      key: drive.key.toString('hex'),
    };
  }

  async swarmDrive(drive) {
    await this.client.replicate(drive);
    await new Promise(() => setTimeout(() => {}, 3e3));
    await this.client.network.configure(drive, {
      announce: true,
      lookup: true,
    });

    return {
      key: drive.key.toString('hex'),
      discoveryKey: drive.discoveryKey.toString('hex'),
    };
  }

  stopSwarm(drive) {
    this.client.network.configure(drive, {
      announce: false,
      lookup: false,
    });
  }

  async mountHyperdrive(key) {
    const drive = new Hyperdrive(
      this.client.corestore(),
      Buffer.from(key, 'hex'),
    );
    await drive.promises.ready();
    console.log('Drive mounted, key:');
    console.log('  ', drive.key.toString('hex'));

    return {drive, key: drive.key.toString('hex')};
  }

  async close() {
    await this.cleanup();
  }
}
