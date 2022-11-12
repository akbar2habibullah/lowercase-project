import * as DocumentPicker from 'expo-document-picker'

export const pickDocument = async (customOpt) => {
	const options = {
		...customOpt,
	}
	try {
		const res = await DocumentPicker.getDocumentAsync(options)
		return res
	} catch (err) {
		err
	}
}
