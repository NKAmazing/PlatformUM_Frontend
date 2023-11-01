import { apiManager } from "../api/APIs";
import { urls } from "../Constants";
import { reservationStatus, errorMessages } from "../Constants";

export async function getReservationInformation(id) {
  const response = await apiManager.get(id, urls.reservationApi);
  if (response.data) {
    return response.data;
  }

  return null;
}

export async function CreateReservation(userID, tripID, price) {
  try {
      const registerData = {
          user: {
              id: userID
          },
          trip: {
              id: tripID
          },
          status: reservationStatus.confirmed, // TODO: Add status logic
          price: price
      };

      const response = await apiManager.post(registerData, urls.reservationApi);
      return response.data;
  } catch (error) {
      console.log(errorMessages.request, error);
      return null;
  }
}