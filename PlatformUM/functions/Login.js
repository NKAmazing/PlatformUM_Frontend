import loginApi from "../api/LoginApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function onLogin(username, password) {
  try {
    const loginData = {
      username: username,
      password: password,
    };

    const response = await loginApi.post(loginData);
    console.log("Request success: ", response);
    // Save token to AsyncStorage
    const token = response.data.token;
    await AsyncStorage.setItem('jwtToken', token);

    return true;
  } catch (error) {
    console.log("Request error: ", error);
    return false;
  }
}

export default onLogin;