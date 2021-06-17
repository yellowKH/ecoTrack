import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (data) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('APPDATA', jsonValue);
        return "stored it!";
    } catch (e) {
        throw e;
    }
};

export const getData = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('APPDATA').then(value => {
            if (value != null) {
                resolve(value);
            } else {
                reject(Error("Something went wrong!"));
            }
        })
    })
}