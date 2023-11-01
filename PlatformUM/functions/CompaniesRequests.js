import { errorMessages, urls } from '../Constants';
import { apiManager } from '../api/APIs';


export const fetchCompaniesData = async () => {
  try {
    const response = await apiManager.getAll(urls.companiesApi);
    return response.data;
  } catch (error) {
    console.error(errorMessages.fetch, error);
    return [];
  }
}