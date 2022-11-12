import RNQRGenerator from 'rn-qr-generator';

export const generateQR = async value => {
  try {
    const {uri, width, height, base64} = await RNQRGenerator.generate({
      value,
      height: 100,
      width: 100,
      correctionLevel: 'H',
      padding: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
      },
      fileName: value + '-qr.png',
    });
    return {uri, width, height, base64};
  } catch (error) {
    return error;
  }
};

export const detectQR = async uri => {
  try {
    const {values} = await RNQRGenerator.detect({uri});
    return values;
  } catch (error) {
    return error;
  }
};

export const detectQRFromBase64 = async base64 => {
  try {
    const {values} = await RNQRGenerator.detect({base64});
    return values;
  } catch (error) {
    return error;
  }
};
