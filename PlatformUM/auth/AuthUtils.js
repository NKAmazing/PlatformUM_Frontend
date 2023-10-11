import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode } from 'base-64';

export async function getUsernameFromToken() {
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken) {
        const tokenData = jwtToken.split('.')[1];
        const base64 = tokenData.replace(/-/g, '+').replace(/_/g, '/');
        const userData = JSON.parse(decode(base64));
        return userData.sub;
    }
    return null;
}