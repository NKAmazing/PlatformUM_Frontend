import { apiManager } from "../api/APIs";
import { errorMessages, urls } from "../Constants";

async function onCheckUsername(username) {
    try {
        const response = await apiManager.getByUsername(username, urls.userApi);
        if (response.data == true) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        console.log(errorMessages.request, error);
        return false;
    }
}

export default onCheckUsername;