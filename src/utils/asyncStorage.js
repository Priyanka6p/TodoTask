import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log('error in set',e);
    }
  };


  export const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('error in get',e);
    }
  };

  export const removeData = async () => {
    try {
      await AsyncStorage.removeItem(value);
    } catch (e) {
      console.log('Error in removeData:', e);
    }
  };
  