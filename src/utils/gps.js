import * as Location from 'expo-location'

export const getCurrentLocation = async (customOpt) => {
	const options = {
		...customOpt,
	}
	try {
		const location = await Location.getCurrentPositionAsync(options)
		return location
	} catch (error) {
		return error
	}
}

export const backgroundPermission = () => {
	const [status, requestPermission] = Location.useBackgroundPermissions()

	if (!status.granted && status.canAskAgain) {
		requestPermission()
	}

	return status
}

export const foregroundPermission = () => {
	const [status, requestPermission] = Location.useForegroundPermissions()

	if (!status.granted && status.canAskAgain) {
		requestPermission()
	}

	return status
}

export const enableHighAccuracy = async () => {
	return await Location.enableNetworkProviderAsync()
}
