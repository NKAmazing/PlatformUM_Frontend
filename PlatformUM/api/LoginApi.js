import ApiManager from "./base/ApiManager";

const loginUrl = "/auth/login";
const loginApi = new ApiManager(loginUrl);

export default loginApi;