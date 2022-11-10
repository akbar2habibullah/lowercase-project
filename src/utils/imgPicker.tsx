import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const pickImage = async (
  options: any = {mediaType: 'photo', includeBase64: true},
  callback: any,
) => {
  try {
    return await launchImageLibrary(options, callback(false));
  } catch (e) {
    return callback(e);
  }
};

export const takePhoto = async (
  options: any = {
    mediaType: 'photo',
    includeBase64: true,
    cameraType: 'back',
  },
  callback: any,
) => {
  try {
    return await launchCamera(options, callback(false));
  } catch (e) {
    return callback(e);
  }
};
