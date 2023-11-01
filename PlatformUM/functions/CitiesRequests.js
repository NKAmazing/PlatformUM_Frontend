import { errorMessages, urls } from '../Constants';
import { apiManager } from '../api/APIs';


export const fetchLocationsData = async () => {
  try {
    const response = await apiManager.getAll(urls.citiesApi);
    return response.data;
  } catch (error) {
    console.error(errorMessages.fetch, error);
    console.error(errorMessages.data, error.response.data);
    console.error(errorMessages.status, error.response.status);
    console.error(errorMessages.headers, error.response.headers);
    return [];
  }
}