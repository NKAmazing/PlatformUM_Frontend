import { userApi } from "../api/APIs";

async function onEditInformation(userId, email, password, telephone) {
    try {
      const editData = {
          email: email,
          password: password,
          telephone: telephone,
      };
      const response = await userApi.put(userId, editData);
      return true;
    } catch (error) {
      console.log("Request error: ", error);
      return false;
    }
}

export default onEditInformation;