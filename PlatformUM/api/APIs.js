import ApiManager from "./base/ApiManager";

const apiManager = new ApiManager();

function updateTokenForAllViews()
{
    apiManager.updateToken();
};

export { apiManager, updateTokenForAllViews };