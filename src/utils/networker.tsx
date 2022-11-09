// @ts-ignore
import Networker from '@corestore/networker';
import {Buffer} from 'buffer';

export default class NetworkerUtils {
  networker: any;

  constructor(corestore: any) {
    this.networker = new Networker(corestore);
  }

  async joinSwarm(discoveryKey: string) {
    return await this.networker.configure(Buffer.from(discoveryKey, 'hex'), {
      announce: true,
      lookup: true,
    });
  }

  leaveSwarm(discoveryKey: string) {
    this.networker.configure(Buffer.from(discoveryKey, 'hex'), {
      announce: false,
      lookup: false,
    });
  }

  async shutdownSwarm() {
    await this.networker.close();
  }

  getNetworker() {
    return this.networker;
  }

  getPeers() {
    return this.networker.peers;
  }
}
