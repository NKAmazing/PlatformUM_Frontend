import tripsApi from '../api/TripsApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const fetchTripsData = async (origin, destination, date) => {
  try {
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken) {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await tripsApi.search(origin, destination, date, axiosConfig);

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