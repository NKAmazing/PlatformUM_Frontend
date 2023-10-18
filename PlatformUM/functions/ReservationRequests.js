import { apiManager } from "../api/APIs";
import urls from "../Constants";

async function getReservationList(userId) {
  const response = await apiManager.get(userId, "/api/v1/reservations");
  if (response.data) {
    console.log("Reservation list: ", response.data);
    return response.data;
  }
  console.log("Reservation list: ", response.data);
  return null;
}

export default getReservationList;