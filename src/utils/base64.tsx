import {btoa, atob} from 'react-native-quick-base64';

export const uriToBase64 = (uri: string, type: string) => {
  if (!type) {
    throw new Error('type is required');
  }
  const encoded = btoa(uri);

  return `data:${type};base64,${encoded}`;
};

export const uriToPlainBase64 = (uri: string) => {
  const encoded = btoa(uri);

  return encoded;
};

export const base64ToBlob = (base64: string, type: string) => {
  if (!type) {
    throw new Error('type is required');
  }
  const decoded = atob(base64);

  return new Blob([decoded], {type, lastModified: Date.now()});
};
