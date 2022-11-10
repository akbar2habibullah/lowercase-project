import {MMKVLoader, MMKVInstance, create} from 'react-native-mmkv-storage';

export default class MMKVStorageUtils {
  storage: MMKVInstance;
  hooks: any;

  constructor(id: string = 'root') {
    this.storage = new MMKVLoader()
      .withInstanceID(id)
      .withEncryption()
      .initialize();
    this.hooks = create(this.storage);
  }

  getAllIds() {
    return this.storage.getAllMMKVInstanceIDs();
  }

  useStorage(key: string, defaultValue?: any) {
    const [value, setValue] = this.hooks(key, defaultValue);
    return [value, setValue];
  }

  async setString(key: string, value: string) {
    return await this.storage.setStringAsync(key, value);
  }

  async getString(key: string) {
    return await this.storage.getStringAsync(key);
  }

  async setInt(key: string, value: number) {
    return await this.storage.setIntAsync(key, value);
  }

  async getInt(key: string) {
    return await this.storage.getIntAsync(key);
  }

  async setBool(key: string, value: boolean) {
    return await this.storage.setBoolAsync(key, value);
  }

  async getBool(key: string) {
    return await this.storage.getBoolAsync(key);
  }

  async setObject(key: string, value: any) {
    return await this.storage.setMapAsync(key, value);
  }

  async getObject(key: string) {
    return await this.storage.getMapAsync(key);
  }

  async setArray(key: string, value: any[]) {
    return await this.storage.setArrayAsync(key, value);
  }

  async getArray(key: string) {
    return await this.storage.getArrayAsync(key);
  }

  async getAllKeys() {
    const keys = await this.storage.indexer.getKeys();

    if (keys) {
      return keys;
    } else {
      return [];
    }
  }

  async getAllData() {
    const data = {
      string: await this.storage.indexer.strings.getAll(),
      int: await this.storage.indexer.numbers.getAll(),
      bool: await this.storage.indexer.booleans.getAll(),
      object: await this.storage.indexer.maps.getAll(),
      array: await this.storage.indexer.arrays.getAll(),
    };

    return data;
  }
}
