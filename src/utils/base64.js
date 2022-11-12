import { btoa, atob } from 'js-base64'

export const uriToBase64 = (uri, type) => {
	if (!type) {
		throw new Error('type is required')
	}
	const encoded = btoa(uri)

	return { uri: `data:${type};base64,${encoded}`, encoded }
}

export const base64ToBlob = (base64, type) => {
	if (!type) {
		throw new Error('type is required')
	}
	const decoded = atob(base64)

	return new Blob([decoded], { type, lastModified: Date.now() })
}
