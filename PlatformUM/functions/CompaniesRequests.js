import companiesApi from '../api/CompaniesApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const fetchCompaniesData = async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken) {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await companiesApi.getAll(axiosConfig);
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