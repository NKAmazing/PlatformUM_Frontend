import { apiManager } from "../api/APIs";
import { urls } from "../Constants";

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
        console.log("Request error: ", error);
        return false;
    }
}

export default onCheckUsername;