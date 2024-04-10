import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("key", jsonValue);
      console.log("Data saved in AsyncStorage", jsonValue);
    } catch (e) {
        console.log('error in storeData',e);
    }
  };

  export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("key");
      console.log("Getting data from AsyncStorage", JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('error in getData',e);
    }
  };

  // export const removeData = async () => {
  //   try {
  //     await AsyncStorage.removeItem(value);
  //   } catch (e) {
  //     console.log('Error in removeData:', e);
  //   }
  // };
  