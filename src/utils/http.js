import Axios from 'axios';

export default function http(baseUrl, options) {
  return Axios.create({
    baseUrl,
    ...options,
  });
}
