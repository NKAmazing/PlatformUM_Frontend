import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManager, updateTokenForAllViews } from '../api/APIs';
import { errorMessages, urls } from '../Constants';

async function CreatePassenger(passengerData, reservationID) {
    try {
        passengerData.reservation = {
            id: reservationID
        };

        const response = await apiManager.post(passengerData, urls.passengersApi);
        return response.data;
    } catch (error) {
        console.log(errorMessages.request, error);
        return null;
    }
}

export default CreatePassenger;
