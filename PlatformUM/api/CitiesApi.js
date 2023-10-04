import ApiManager from "./base/ApiManager";

const citiesUrl = "/api/v1/cities";
const citiesApi = new ApiManager(citiesUrl);

export default citiesApi;