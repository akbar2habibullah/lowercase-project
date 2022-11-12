import EncryptWithPassword from 'encrypt-with-password'

export const SymmetricEncrypt = (data, password) => {
	return EncryptWithPassword.encrypt(data, password)
}

export const SymmetricDecrypt = (data, password) => {
	return EncryptWithPassword.decrypt(data, password)
}
