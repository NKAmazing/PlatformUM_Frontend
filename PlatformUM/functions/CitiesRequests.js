import { urls } from '../Constants';
import { apiManager } from '../api/APIs';


export const fetchLocationsData = async () => {
  try {
    const response = await apiManager.getAll(urls.citiesApi);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
    console.error('Response headers:', error.response.headers);
    return [];
  }
}