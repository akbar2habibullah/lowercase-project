// @ts-ignore
import Protocol from 'hypercore-protocol';
import {Buffer} from 'buffer';

export default class HyperstreamUtils {
  initiator: boolean;
  key: string;
  stream: any;
  channel: any;
  expired: boolean;

  constructor(initiator: boolean, key: string, expired: boolean = false) {
    this.initiator = initiator;
    this.key = key;
    this.expired = expired;

    this.stream = new Protocol(initiator, {timeout: expired ? 3600 : false});

    this.channel = this.stream.open(Buffer.from(key, 'hex'));
  }

  async sendMessages(messages: string, datetime: string) {
    if (!this.initiator) {
      throw new Error('Only initiator can send messages');
    }
    this.channel.data({
      index: 0,
      data: JSON.stringify({datetime: datetime, messages}),
    });
  }
}
