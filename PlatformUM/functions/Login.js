import { apiManager, updateTokenForAllViews } from '../api/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { urls } from '../Constants';


async function onLogin(username, password) {
  try {
    const loginData = {
      username: username,
      password: password,
    };
    // await AsyncStorage.removeItem('jwtToken');
    const response = await apiManager.postWithoutToken(loginData, urls.loginApi);
    // Save token to AsyncStorage
    const token = response.data.token;
    await AsyncStorage.setItem('jwtToken', token);
    updateTokenForAllViews();

    return true;
  } catch (error) {
    console.log("Request error: ", error);
    return false;
  }
}

export default onLogin;