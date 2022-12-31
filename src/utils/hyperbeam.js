// @ts-ignore
import Hyperbeam from 'hyperbeam'

export default class HyperbeamUtils {
	beam
	key
	host
	port

	constructor(async_param) {
		if (typeof async_param === 'undefined') {
			throw new Error('Cannot be called directly')
		}

		this.beam = async_param.beam
		this.key = async_param.key

		this.beam.on('remote-address', ({ host, port }) => {
			if (!host) {
				console.error('[hyperbeam] Could not detect remote address')
			} else {
				this.host = host
				console.log('[hyperbeam] Joined the DHT - remote address is ' + host + ':' + port)
			}
			if (port) {
				this.port = port
				console.log('[hyperbeam] Network is holepunchable \\o/')
			}
		})

		this.beam.resume()
		this.beam.pause()
	}

	static async init(passphrase) {
		const beam = new Hyperbeam(passphrase)

		return new HyperbeamUtils({ beam, key: beam.key.toString('hex') })
	}

	getRemoteInfo() {
		return { host: this.host, port: this.port }
	}
}
