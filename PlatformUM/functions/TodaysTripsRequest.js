import { apiManager } from "../api/APIs";
import { urls } from "../Constants";

const now = new Date();

const formatDate = (date) => {
    const originalDate = new Date(date);
    const day = String(originalDate.getDate()).padStart(2, "0");
    const month = String(originalDate.getMonth() + 1).padStart(2, "0");
    const year = originalDate.getFullYear();
    return `${year}-${month}-${day}`;
};

export const fetchTripsByDate = async (date) => {

    try {
        const response = await apiManager.todaysTrips(urls.todaysTripsApi(formatDate(now)));
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}