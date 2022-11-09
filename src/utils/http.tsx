import Axios from 'axios';

export default function http(baseUrl: string, options: any) {
  return Axios.create({
    baseUrl,
    ...options,
  });
}
