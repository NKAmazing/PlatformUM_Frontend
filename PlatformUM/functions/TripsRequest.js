import { apiManager } from '../api/APIs';
import { errorMessages, urls } from '../Constants';

function formatDate(date) {
  const originalDate = new Date(date);
  const day = String(originalDate.getDate()).padStart(2, '0');
  const month = String(originalDate.getMonth() + 1).padStart(2, '0');
  const year = originalDate.getFullYear();
  return `${year}-${month}-${day}`;
}

function replaceSpacesWithPercent20(cityName) {
  return cityName.replace(/ /g, '%20');
}

export const fetchTripsData = async (origin, destination, date) => {
  try {
    const formattedDate = formatDate(date);
    const formattedOrigin = replaceSpacesWithPercent20(origin);
    const formattedDestination = replaceSpacesWithPercent20(destination);

    const response = await apiManager.searchTrip(urls.searchTripsApi(formattedOrigin, formattedDestination, formattedDate));
    return response.data;
  } catch (error) {
    console.error(errorMessages.fetch, error);
    return [];
  }
}