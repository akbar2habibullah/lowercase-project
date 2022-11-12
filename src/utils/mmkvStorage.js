import { MMKV } from 'react-native-mmkv'

export default class MMKVStorageUtils {
	storage
	encrypted = false
	static storageIDs = new MMKV({ id: 'IDs' })

	constructor(id = 'root', encryptionKey = null) {
		if (encryptionKey) {
			this.encrypted = true
		}

		this.storage = new MMKV({ id: `${id}-storage`, encryptionKey })

		const ids = JSON.parse(MMKVStorageUtils.storageIDs.getString('ids'))
		if (!ids) {
			MMKVStorageUtils.storageIDs.setString('ids', JSON.stringify([id]))
		} else {
			if (!ids.includes(id)) {
				ids.push(id)
				MMKVStorageUtils.storageIDs.setBuffer('ids', JSON.stringify(ids))
			}
		}
	}

	recryptStorage(newEncryptionKey) {
		if (this.encrypted) {
			throw new Error('Storage is already encrypted')
		}
		this.storage.recrypt(newEncryptionKey)
	}

	removeEncrypt() {
		this.storage.recrypt(undefined)
	}

	static getAllIds() {
		return JSON.parse(MMKVStorageUtils.storageIDs.getString('ids'))
	}

	setPrimitive(key, value) {
		return this.storage.set(key, value)
	}

	getString(key) {
		return this.storage.getString(key)
	}

	getInt(key) {
		return this.storage.getNumber(key)
	}

	getBool(key) {
		return this.storage.getBoolean(key)
	}

	setObject(key, value) {
		return this.storage.set(key, JSON.stringify(value))
	}

	getObject(key) {
		return JSON.parse(this.storage.getString(key))
	}

	getAllKeys() {
		const keys = this.storage.getAllKeys()

		if (keys) {
			return keys
		} else {
			return []
		}
	}

	removeItem(key) {
		return this.storage.delete(key)
	}

	format() {
		return this.storage.clearAll()
	}
}
