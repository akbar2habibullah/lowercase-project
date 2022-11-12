import * as ImagePicker from 'expo-image-picker'

export const pickImage = async (customOpt) => {
	const options = {
		base64: true,
		...customOpt,
	}
	try {
		if (!permmisionLibrary().granted) throw new Error('Permission to access media library is required!')

		return await ImagePicker.launchImageLibraryAsync(options)
	} catch (e) {
		return e
	}
}

export const takePhoto = async (customOpt) => {
	const options = {
		base64: true,
		allowsEditing: true,
		...customOpt,
	}
	try {
		if (!permmisionCamera().granted) throw new Error('Permission to access camera roll is required!')

		return await ImagePicker.launchCameraAsync(options)
	} catch (e) {
		return e
	}
}

export const getPendingResult = async () => {
	try {
		return await ImagePicker.getPendingResultAsync()
	} catch (e) {
		return e
	}
}

export const permmisionCamera = () => {
	const [status, requestPermission] = ImagePicker.useCameraPermissions()

	if (!status.granted && status.canAskAgain) {
		requestPermission()
	}

	return status
}

export const permmisionLibrary = () => {
	const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions()

	if (!status.granted && status.canAskAgain) {
		requestPermission()
	}

	return status
}
