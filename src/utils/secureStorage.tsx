import EncryptedStorage from 'react-native-encrypted-storage';

export const setItemSecure = async (key: string, value: any) => {
  try {
    return await EncryptedStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return error;
  }
};

export const getItemSecure = async (key: string) => {
  try {
    const value = await EncryptedStorage.getItem(key);
    return value || null;
  } catch (error) {
    return error;
  }
};

export const removeItemSecure = async (key: string) => {
  try {
    return await EncryptedStorage.removeItem(key);
  } catch (error) {
    return error;
  }
};

export const formatAllSecure = async () => {
  try {
    return await EncryptedStorage.clear();
  } catch (error) {
    return error;
  }
};
