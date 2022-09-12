import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  },
  getData = async key => {
    try {
      let data = await AsyncStorage.getItem(key);
      return key !== null ? data : null;
    } catch (error) {
      console.log(error);
    }
  },
  /* JSON */
  storeDataJson = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (err) {
      console.log(err);
    }
  },
  getDataJson = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.log(err);
    }
  };

module.exports = {
  storeData,
  getData,
  storeDataJson,
  getDataJson,
};
