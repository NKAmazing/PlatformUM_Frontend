import loginApi from "../api/LoginApi";

function onLogin (username, password) {
    return new Promise((resolve, reject) => {
        // Context data setted
        const loginData = {
            username: username,
            password: password,
        };

        loginApi.post(loginData)
            .then((response) => {
                console.log("Request success: ", response);
                resolve(true);
            })
            .catch((error) => {
                console.log("Request error: ", error);
                reject(false);
            });
    });
};

export default onLogin;