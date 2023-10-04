import ApiManager from "./base/ApiManager";

const companiesUrl = "/api/v1/companies";
const companiesApi = new ApiManager(companiesUrl);

export default companiesApi;