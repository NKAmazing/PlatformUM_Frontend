import ApiManager from "./base/ApiManager";

const citiesApi = new ApiManager("/api/v1/cities");
const companiesApi = new ApiManager("/api/v1/companies");
const loginApi = new ApiManager("/auth/login");
const registerApi = new ApiManager("/auth/register");
const userApi = new ApiManager("/api/v1/users");

function updateTokenForAllViews()
{
    citiesApi.updateToken();
    companiesApi.updateToken();
    loginApi.updateToken();
    registerApi.updateToken();
    userApi.updateToken();
};

export { citiesApi, companiesApi, loginApi, registerApi, userApi, updateTokenForAllViews };