import GetLocation from 'react-native-get-location';

export const getCurrentLocation = async (options?: any) => {
  try {
    const location = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
      ...options,
    });
    return location;
  } catch (error) {
    return error;
  }
};
