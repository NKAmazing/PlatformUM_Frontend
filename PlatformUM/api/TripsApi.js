import ApiManager from "./base/ApiManager";

const tripsUrl = "/api/v1/trips";
const tripApi = new ApiManager(tripsUrl);

export default tripApi;