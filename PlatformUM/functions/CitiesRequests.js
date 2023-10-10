import { citiesApi } from '../api/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const fetchLocationsData = async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken) {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await citiesApi.getAll(axiosConfig);
      return response.data;
    } else {
      console.log('Token not found in AsyncStorage');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};