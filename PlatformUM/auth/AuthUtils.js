import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode } from 'base-64';

export async function getUserIdFromToken() {
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken) {
      const tokenData = jwtToken.split('.')[1];
      const base64 = tokenData.replace(/-/g, '+').replace(/_/g, '/');
      const userData = JSON.parse(decode(base64)); // Utiliza decode en lugar de atob
      return userData.id;
    }
    return null;
}