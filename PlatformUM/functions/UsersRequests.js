import { getUserIdFromToken } from "../auth/AuthUtils";
import { userApi } from "../api/APIs";

async function getUserInformation() {
  const userId = await getUserIdFromToken();
  if (userId) {
    const response = await userApi.get(userId);
    console.log("User information: ", response.data);
    return response.data;
  }
  return null;
}

export default getUserInformation;