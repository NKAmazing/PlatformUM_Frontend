import { apiManager } from "../api/APIs";
import { errorMessages, urls } from "../Constants";

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
      console.log(errorMessages.request, error);
      return false;
    }
}

export default onEditInformation;