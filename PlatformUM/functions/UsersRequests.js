import { getUsernameFromToken } from "../auth/AuthUtils";
import { userApi } from "../api/APIs";

async function getUserInformation() {
  const username = await getUsernameFromToken();
  if (username) {
    const response = await userApi.getByUsername(username);
    return response.data;
  }
  return null;
}

export default getUserInformation;