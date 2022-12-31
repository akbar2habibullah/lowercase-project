// @ts-ignore
import Protocol from 'hypercore-protocol'
import { Buffer } from 'buffer'

export default class HyperstreamUtils {
	initiator
	key
	stream
	channel
	expired

	constructor(initiator, key, expired) {
		this.initiator = initiator
		this.key = key
		this.expired = expired

		this.stream = new Protocol(initiator, { timeout: expired ? 3600 : false })

		this.channel = this.stream.open(Buffer.from(key, 'hex'))
	}

	async sendMessages(messages, datetime) {
		if (!this.initiator) {
			throw new Error('Only initiator can send messages')
		}
		return await this.channel.data({
			index: 0,
			data: JSON.stringify({ datetime: datetime, messages }),
		})
	}
}
