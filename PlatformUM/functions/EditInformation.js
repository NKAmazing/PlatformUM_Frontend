import { apiManager } from "../api/APIs";
import { urls } from "../Constants";

async function onEditInformation(userId, email, password, telephone) {
    try {
      const editData = {
          email: email,
          password: password,
          telephone: telephone,
      };
      const response = await apiManager.put(userId, editData, urls.userApi);
      return true;
    } catch (error) {
      console.log("Request error: ", error);
      return false;
    }
}

export default onEditInformation;