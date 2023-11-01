import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManager, updateTokenForAllViews } from '../api/APIs';
import { urls } from '../Constants';

async function CreateReservation(userID, tripID, price) {
    try {
        const registerData = {
            user: {
                id: userID
            },
            trip: {
                id: tripID
            },
            status: "CONFIRMED", // TODO: Add status logic
            price: price
        };

        const response = await apiManager.post(registerData, urls.reservationApi);
        return response.data;
    } catch (error) {
        console.log("Request error: ", error);
        return null;
    }
}

export default CreateReservation;
