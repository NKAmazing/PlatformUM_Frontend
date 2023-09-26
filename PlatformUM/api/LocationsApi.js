import ApiManager from "./ApiManager";

export const getLocations = () => {
    return ApiManager.get("/destinations");
};