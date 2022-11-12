import * as SecureStore from 'expo-secure-store'

export const setItemSecure = async (key, value, options = {}) => {
	try {
		return await SecureStore.setItemAsync(key, JSON.stringify(value), options)
	} catch (error) {
		return error
	}
}

export const getItemSecure = async (key, options = {}) => {
	try {
		return JSON.parse(await SecureStore.getItemAsync(key, options))
	} catch (error) {
		return error
	}
}

export const removeItemSecure = async (key, options = {}) => {
	try {
		return await SecureStore.deleteItemAsync(key, options)
	} catch (error) {
		return error
	}
}

export const checkSecure = async () => {
	try {
		return await SecureStore.isAvailableAsync()
	} catch (error) {
		return error
	}
}
