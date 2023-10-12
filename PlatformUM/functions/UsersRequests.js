import { getUsernameFromToken } from "../auth/AuthUtils";
import { apiManager } from "../api/APIs";
import urls from "../Constants";

async function getUserInformation() {
  const username = await getUsernameFromToken();
  if (username) {
    const response = await apiManager.getByUsername(username, urls.getUserInformation);
    return response.data;
  }
  return null;
}

export default getUserInformation;