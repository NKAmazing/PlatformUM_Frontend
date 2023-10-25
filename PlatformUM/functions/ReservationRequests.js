import { apiManager } from "../api/APIs";
import { urls } from "../Constants";

async function getReservationInformation(id) {
  const response = await apiManager.get(id, urls.reservationApi);
  if (response.data) {
    return response.data;
  }
  console.log("Reservation: ", response.data);
  return null;
}

export default getReservationInformation;