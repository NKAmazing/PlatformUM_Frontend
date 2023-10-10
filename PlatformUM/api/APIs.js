import ApiManager from "./base/ApiManager";

const citiesApi = new ApiManager("/api/v1/cities");
const companiesApi = new ApiManager("/api/v1/companies");
const loginApi = new ApiManager("/auth/login");

function updateTokenForAllViews()
{
    citiesApi.updateToken();
    companiesApi.updateToken();
    loginApi.updateToken();
};

export { citiesApi, companiesApi, loginApi, updateTokenForAllViews };